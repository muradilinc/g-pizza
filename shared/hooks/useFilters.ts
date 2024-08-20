import { useSearchParams } from 'next/navigation';
import { useSet } from 'react-use';
import { useState } from 'react';

interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}

interface QueryFilters extends PriceProps {
  pizzaTypes: string;
  sizes: string;
  ingredients: string;
}

export interface Filters {
  sizes: Set<string>;
  pizzaTypes: Set<string>;
  selectedIngredients: Set<string>;
  price: PriceProps;
}

interface ReturnPros extends Filters {
  setPrice: (name: keyof PriceProps, value: number) => void;
  setPizzaTypes: (value: string) => void;
  setSizes: (value: string) => void;
  setIngredients: (value: string) => void;
}

export const useFilters = (): ReturnPros => {
  const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>;
  const [sizes, {toggle: toggleSizes}] = useSet(new Set<string>(searchParams.get('sizes') ? searchParams.get('sizes')?.split(',') : []));
  const [pizzaTypes, {toggle: togglePizzaTypes}] = useSet(new Set<string>(searchParams.get('pizzaTypes') ? searchParams.get('pizzaTypes')?.split(',') : []));
  const [price, setPrice] = useState<PriceProps>({
    priceFrom: Number(searchParams.get('priceFrom')) || undefined,
    priceTo: Number(searchParams.get('priceTo')) || undefined,
  });
  const [selectedIngredients, {toggle: toggleIngredients}] = useSet(new Set<string>(searchParams.get('ingredients')?.split(',')));

  const changeRange = (name: keyof PriceProps, value: number) => {
    setPrice(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return {
    sizes,
    pizzaTypes,
    selectedIngredients,
    price,
    setPrice: changeRange,
    setPizzaTypes: togglePizzaTypes,
    setSizes: toggleSizes,
    setIngredients: toggleIngredients,
  };
};
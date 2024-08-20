import { useEffect } from 'react';
import qs from 'qs';
import { Filters } from './useFilters';
import { useRouter } from 'next/navigation';

export const useQueryFilter = (filters: Filters) => {
  const router = useRouter();
  useEffect(() => {
    const params = {
      ...filters.price,
      pizzaTypes: Array.from(filters.pizzaTypes),
      sizes: Array.from(filters.sizes),
      ingredients: Array.from(filters.selectedIngredients),
    };
    const queryString = qs.stringify(params, {arrayFormat: 'comma'});

    router.push(`?${queryString}`, {scroll: false});
  }, [filters, router]);
};
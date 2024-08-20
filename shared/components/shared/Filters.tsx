'use client';
import React, { ChangeEvent } from 'react';
import { useFilters, useIngredients, useQueryFilter } from '@/shared/hooks';
import { Title } from '@/shared/components/shared/title';
import { CheckboxFiltersGroup } from '@/shared/components/shared/checkbox-filters-group';
import { Input } from '@/shared/components/ui/input';
import { RangeSlider } from '@/shared/components/shared/range-slider';

interface Props {
  className?: string;
}

// interface PriceProps {
//   priceFrom?: number;
//   priceTo?: number;
// }

// interface QueryFilters extends PriceProps {
//   pizzaTypes: string;
//   sizes: string;
//   ingredients: string;
// }

export const Filters: React.FC<Props> = ({className}) => {
  const {ingredients, loading} = useIngredients();
  const filters = useFilters();
  useQueryFilter(filters);

  const items = ingredients.map((item) => ({value: String(item.id), text: item.name}));

  const updatedPrices = (prices: number[]) => {
    filters.setPrice('priceFrom', prices[0]);
    filters.setPrice('priceTo', prices[1]);
  };

  return (
    <div className={className}>
      <Title text="Filter" size="sm" className="mb-5 font-bold"/>
      <div className="flex flex-col gap-4">
        <CheckboxFiltersGroup
          title="Dough Types"
          name="dough"
          className="mb-5"
          items={[
            {text: 'Thin', value: '1',},
            {text: 'Traditional', value: '2',},
          ]} onClickCheckbox={filters.setPizzaTypes} selected={filters.pizzaTypes}
        />
        <CheckboxFiltersGroup
          title="Sizes"
          name="sizes"
          className="mb-5"
          items={[
            {text: '20 sm', value: '20',},
            {text: '30 sm', value: '30',},
            {
              text: '40 sm', value: '40',
            }]} onClickCheckbox={filters.setSizes} selected={filters.sizes}
        />
      </div>
      <div className="mt-5 border-y border-y-neutral-100 py-7 pb-7">
        <p className="font-bold mb-3">Price from and to:</p>
        <div className="flex gap-3 mb-5">
          <Input type="number" placeholder="0" min={0} max={30000} value={String(filters.price.priceFrom)}
                 onChange={(event: ChangeEvent<HTMLInputElement>) => filters.setPrice('priceFrom', Number(event.target.value))}/>
          <Input type="number" min={10} max={1000} placeholder="1000" value={String(filters.price.priceTo)}
                 onChange={(event: ChangeEvent<HTMLInputElement>) => filters.setPrice('priceTo', Number(event.target.value))}/>
        </div>
        <RangeSlider
          min={0} max={1000} step={10} value={[filters.price.priceFrom || 0, filters.price.priceTo || 1000]}
          onValueChange={updatedPrices}/>
      </div>
      <CheckboxFiltersGroup
        title="Ingredients"
        name="ingredients"
        className="mt-5"
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickCheckbox={filters.setIngredients}
        selected={filters.selectedIngredients}
      />
    </div>
  );
};
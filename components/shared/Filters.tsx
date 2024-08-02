import React from 'react';
import { Title } from '@/components/shared/title';
import { FilterCheckbox } from '@/components/shared/FilterCheckbox';
import { Input } from '@/components/ui/input';
import { RangeSlider } from '@/components/shared/range-slider';
import { CheckboxFiltersGroup } from '@/components/shared/checkbox-filters-group';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({className}) => {
  return (
    <div className={className}>
      <Title text="Filter" size="sm" className="mb-5 font-bold"/>
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="May to create" value="1"/>
        <FilterCheckbox text="New" value="2"/>
      </div>
      <div className="mt-5 border-y border-y-neutral-100 py-7 pb-7">
        <p className="font-bold mb-3">Price from and to:</p>
        <div className="flex gap-3 mb-5">
          <Input type="number" placeholder="0" min={0} max={30000} defaultValue={0}/>
          <Input type="number" min={10} max={1000} placeholder="1000"/>
        </div>
        <RangeSlider min={0} max={5000} step={10} value={[0, 1000]}/>
      </div>
      <CheckboxFiltersGroup
        title="Ingredients"
        className="mt-5"
        limit={6}
        defaultItems={
          [
            {
              text: 'Cheese sous',
              value: '1'
            },
            {
              text: 'Mozzarella',
              value: '2'
            }
          ]
        }
        items={[
          {
            text: 'Cheese sous',
            value: '1'
          },
          {
            text: 'Mozzarella',
            value: '2'
          }
        ]}
      />
    </div>
  );
};
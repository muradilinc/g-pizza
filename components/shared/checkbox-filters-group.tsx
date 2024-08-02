'use client';
import React, { ChangeEvent, useState } from 'react';
import { FilterCheckbox, FilterCheckboxProps } from '@/components/shared/FilterCheckbox';
import { Input } from '@/components/ui/input';

type Item = FilterCheckboxProps;

interface Props {
  title: string;
  items: Item[];
  defaultItems: Item[];
  limit?: number;
  searchInputPlaceholder?: string;
  onChange?: (values: string[]) => void;
  defaultValue?: string[];
  className?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = (
  {
    title,
    items,
    defaultItems,
    limit = 5,
    searchInputPlaceholder = 'Search...',
    className,
    onChange,
    defaultValue,
  }
) => {
  const [showAll, setShowAll] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const onChangeSearchInput = (event: ChangeEvent<HTMLInputElement>) => {

    const {value} = event.target;
    setSearchValue(value);
  };

  const list =
    showAll ? items.filter((item) => item.text.toLowerCase().includes(searchValue.toLowerCase())) : defaultItems?.slice(0, limit);

  return (
    <div className={className}>
      <p className="font-bold mb-3">{title}</p>
      {
        showAll &&
        <div className="mb-5">
          <Input
            onChange={onChangeSearchInput}
            placeholder={searchInputPlaceholder}
            className="bg-gray-50 border-none"/>
        </div>
      }
      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {
          list.map((item, index) => (
            <FilterCheckbox
              key={index}
              endAdornment={item.endAdornment}
              text={item.text}
              value={item.value}
              checked={false}
              onCheckedChange={() => console.log(item.value)}
            />
          ))
        }
      </div>
      {
        items.length > limit &&
        <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-primary mt-3">
            {showAll ? 'Hide' : '+ Show all'}
          </button>
        </div>
      }
    </div>
  );
};
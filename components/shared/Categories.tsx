'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';

interface Props {
  className?: string,
}

const cats = [{name: 'Pizzas', id: 1}, {name: 'Snacks', id: 2}, {name: 'Coffee', id: 3}];

export const Categories: React.FC<Props> = ({className}) => {
  const categoryActiveId = useCategoryStore(state => state.activeId);
  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {
        cats.map(({name, id}) => (
          <a
            className={cn('flex items-center font-bold h-11 rounded-2xl px-5',
              categoryActiveId === id && 'bg-white shadow-md shadow-gray-200 text-primary')}
            key={id} href={`/#${name}`}>
            <button>{name}</button>
          </a>
        ))
      }
    </div>
  );
};
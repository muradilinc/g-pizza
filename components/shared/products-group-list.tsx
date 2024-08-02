'use client';
import React, { useEffect, useRef } from 'react';
import { Title } from '@/components/shared/title';
import { cn } from '@/lib/utils';
import { useIntersection } from 'react-use';
import { ProductCard } from '@/components/shared/productCard';
import { useCategoryStore } from '@/store/category';

interface Props {
  title: string;
  items: any[];
  className?: string;
  listClassName?: string;
  categoryId: number;
}

const ProductsGroupList: React.FC<Props> = ({
  title,
  items,
  className,
  listClassName,
  categoryId,
}) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [categoryId, intersection?.isIntersecting, setActiveCategoryId]);

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5"/>
      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {
          items.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.items[0].price}
              imageUrl={item.imageUrl}
            />
          ))
        }
      </div>
    </div>
  );
};

export default ProductsGroupList;
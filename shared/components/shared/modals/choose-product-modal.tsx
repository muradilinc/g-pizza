'use client';
import React from 'react';
import { Dialog, DialogContent } from '@/shared/components/ui/dialog';
import { cn } from '@/shared/lib/utils';
import { useRouter } from 'next/navigation';
import { ChoosePizzaForm, ChooseProductForm } from '@/shared/components/shared';
import { ProductWithRelations } from '@/@types/product';

interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({className, product}) => {
  const router = useRouter();
  const isPizzaForm = !!product.items[0].pizzaType;

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent className={cn('p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden', className)}>
        {
          isPizzaForm ?
            <ChoosePizzaForm imageUrl={product.imageUrl} name={product.name} ingredients={[]}/>
            :
            <ChooseProductForm imageUrl={product.imageUrl} name={product.name}/>
        }
      </DialogContent>
    </Dialog>
  );
};

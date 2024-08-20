import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Title } from './title';
import { Button } from '../ui';
import { PizzaImage } from './productImage';
import { GroupVariants } from '@/shared/components/shared/group-variants';
import { pizzaSizes } from '@/shared/constants/pizza';

interface Props {
  imageUrl: string;
  name: string;
  ingredients: any;
  items?: any;
  onClickAdd?: VoidFunction;
}

export const ChoosePizzaForm: React.FC<Props> = ({
  name,
  imageUrl,
}) => {
  const textDetails = '30 sm, traditional dough 30, 590 g.';
  return (
    <div className={cn('flex flex-1')}>
      <PizzaImage src={imageUrl} size={30}/>

      <div className="w-[490px] bg-[#f7f5f6] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1"/>
        <p className="text-gray-400">{textDetails}</p>
        <GroupVariants items={pizzaSizes}/>
        <Button
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10"
        >Add to cart by 350 c</Button>
      </div>
    </div>
  );
};
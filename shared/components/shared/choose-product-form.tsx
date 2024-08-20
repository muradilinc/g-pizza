import React from 'react';
import { cn } from '@/shared/lib/utils';
import Image from 'next/image';
import { Title } from '@/shared/components/shared/title';
import { Button } from '@/shared/components/ui';

interface Props {
  imageUrl: string;
  name: string;
  onClickAdd?: VoidFunction;
}

export const ChooseProductForm: React.FC<Props> = ({
  name,
  imageUrl,
}) => {
  const textDetails = '30 sm, traditional dough 30, 590 g.';
  return (
    <div className={cn('flex flex-1')}>
      <div className="flex items-center justify-center flex-1 relative w-full">
        <Image
          src={imageUrl}
          alt={name}
          width={350}
          height={350}
          className="relative left-2 top-2 transition-all z-10 duration-300"
        />
      </div>

      <div className="w-[490px] bg-[#f7f5f6] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1"/>
        <p className="text-gray-400">{textDetails}</p>
        <Button
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10"
        >Add to cart by 350 c</Button>
      </div>
    </div>
  );
};
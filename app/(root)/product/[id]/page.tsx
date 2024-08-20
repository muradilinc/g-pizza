import React from 'react';
import { prisma } from '@/prisma/prisma-client';
import { notFound } from 'next/navigation';
import { Container, GroupVariants, Title } from '@/shared/components/shared';
import { PizzaImage } from '@/shared/components/shared';

export default async function ProductPage({params: {id}}: { params: { id: string } }) {
  const product = await prisma.product.findFirst({where: {id: Number(id)}});

  if (!product) {
    return notFound();
  }

  return (
    <Container className="flex flex-col my-10">
      <div className="flex flex-1 ">
        <PizzaImage src={product.imageUrl} size={40}/>
        <div className="w-[490px] bg-[#f7f5f6] p-7">
          <Title text={product.name} size="md" className="font-extrabold mb-1"/>
          <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, totam.</p>

          <GroupVariants
            selectedValue={'2'}
            items={[
            {
              name: 'small',
              value: '1',
            },
            {
              name: 'middle',
              value: '2',
            },
            {
              name: 'big',
              value: '3',
            }
          ]}/>
        </div>
      </div>
    </Container>
  );
};
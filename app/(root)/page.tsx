import React from 'react';
import { Container, Filters, Title, TopBar } from '@/shared/components/shared';
import ProductsGroupList from '@/shared/components/shared/products-group-list';
import { prisma } from '@/prisma/prisma-client';

export default async function Page() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          items: true,
          ingredients: true,
        }
      }
    }
  });

  return (
    <>
      <Container className="mt-10">
        <Title text="All pizza" size="lg" className="font-extrabold"/>
      </Container>
      <TopBar categories={categories.filter(category => category.products.length > 0)}/>
      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Filters/>
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {
                categories.map(category =>
                  category.products.length > 0 &&
                  <ProductsGroupList
                    key={category.id}
                    title={category.name}
                    items={category.products}
                    categoryId={category.id}
                  />
                )
              }
            </div>

          </div>
        </div>
      </Container>
    </>
  );
};

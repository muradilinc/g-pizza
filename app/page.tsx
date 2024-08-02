import React from 'react';
import { Container, Filters, Title, TopBar } from '@/components/shared';
import ProductsGroupList from '@/components/shared/products-group-list';

export default function Page() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All pizza" size="lg" className="font-extrabold"/>
      </Container>
      <TopBar/>
      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Filters/>
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList title='Pizzas' items={[
                {
                  id: 1,
                  name: '2d,a;ld',
                  imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF3DB2188200718EDEB6D5EC3E3ECD.avif',
                  price: 550,
                  items: [{price: 550}]
                },
                {
                  id: 2,
                  name: '2d,a;ld',
                  imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF3DB2188200718EDEB6D5EC3E3ECD.avif',
                  price: 550,
                  items: [{price: 550}]
                },
                {
                  id: 3,
                  name: '2d,a;ld',
                  imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF3DB2188200718EDEB6D5EC3E3ECD.avif',
                  price: 550,
                  items: [{price: 550}]
                },
                {
                  id: 4,
                  name: '2d,a;ld',
                  imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF3DB2188200718EDEB6D5EC3E3ECD.avif',
                  price: 550,
                  items: [{price: 550}]
                },
                {
                  id: 5,
                  name: '2d,a;ld',
                  imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF3DB2188200718EDEB6D5EC3E3ECD.avif',
                  price: 550,
                  items: [{price: 550}]
                }
              ]} categoryId={1}/>
              <ProductsGroupList title='Snacks' items={[
                {
                  id: 1,
                  name: '2d,a;ld',
                  imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF3DB2188200718EDEB6D5EC3E3ECD.avif',
                  price: 550,
                  items: [{price: 550}]
                },
                {
                  id: 2,
                  name: '2d,a;ld',
                  imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF3DB2188200718EDEB6D5EC3E3ECD.avif',
                  price: 550,
                  items: [{price: 550}]
                },
                {
                  id: 3,
                  name: '2d,a;ld',
                  imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF3DB2188200718EDEB6D5EC3E3ECD.avif',
                  price: 550,
                  items: [{price: 550}]
                },
                {
                  id: 4,
                  name: '2d,a;ld',
                  imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF3DB2188200718EDEB6D5EC3E3ECD.avif',
                  price: 550,
                  items: [{price: 550}]
                },
                {
                  id: 5,
                  name: '2d,a;ld',
                  imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF3DB2188200718EDEB6D5EC3E3ECD.avif',
                  price: 550,
                  items: [{price: 550}]
                }
              ]} categoryId={2}/>
            </div>

          </div>
        </div>
      </Container>
    </>
  );
};

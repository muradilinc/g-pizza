import React from 'react';
import {Button} from "@/components/ui/button";
import { Container, Title } from '@/components/shared';

export default function Page () {
    return (
      <>
        <Container className='mt-10'>
          <Title text="All pizza" size="lg" className="font-extrabold"/>
        </Container>
      </>
    );
};

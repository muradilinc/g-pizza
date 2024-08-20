import type { Metadata } from 'next';
import { Header } from '@/shared/components/shared';
import React from 'react';


export const metadata: Metadata = {
  title: 'Next App',
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen">
      <Header/>
      {children}
      {modal}
    </main>
  );
}

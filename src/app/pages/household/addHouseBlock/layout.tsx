import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Нове домогосподарство',
  description: 'Додати нове домогосподарство у погосподарську книгу Куликовичі',
};

export default function addHouseBlockLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
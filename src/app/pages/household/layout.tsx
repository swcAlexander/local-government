import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Погосопдарська книга',
  description: 'Погосподарська книга Куликовичі',
};

export default function HouseholdLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
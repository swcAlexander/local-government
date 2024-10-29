import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Порівняння EXEL файлів',
  description: 'застосунок для порівняння EXEL файлів Куликовичі',
};

export default function CompareLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

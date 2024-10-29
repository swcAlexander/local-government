import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Порівняння EXEL файлів',
  description: 'Застосунок для порівняння EXEL файлів Куликовичі',
};

export default function CompareLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

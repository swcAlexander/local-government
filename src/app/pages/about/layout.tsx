import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Про нас',
  description: 'Про сайт,  Куликовичі',
};

export default function AboutdLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
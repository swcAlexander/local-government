import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Робота з PDF та EXEL',
  description: 'Засоби для роботи з PDF та EXEL Куликовичі',
};

export default function ToolsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

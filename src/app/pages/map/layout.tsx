import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Open Street Map',
  description: 'Карта OpenStreetMap Куликовичі',
};

export default function MapLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from './(components)/Header/page';
import Footer from './(components)/Footer/page';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Local Government',
  description:
    'Засоби та застосунки для роботи у старостинському окрузі Куликовичі',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      

        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
  );
}

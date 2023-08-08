import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { Roboto_Condensed } from 'next/font/google';

const Roboto_ = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
});
const Roboto_Condensed_ = Roboto_Condensed({
  weight: ['700'],
  subsets: ['latin'],
  variable: '--font-roboto-condensed',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sicure Corretora de Seguros',
  description: 'Site institucional da Sicure Corretora de Seguros',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${Roboto_.variable} ${Roboto_Condensed_.variable}`}>
        {children}
      </body>
    </html>
  );
}

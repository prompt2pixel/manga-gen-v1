import './globals.css';
import Navigation from './components/Navigation';
import { Bangers, Comic_Neue } from 'next/font/google';

const bangers = Bangers({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bangers',
});

const comicNeue = Comic_Neue({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-comic',
});

export const metadata = {
  title: 'MangaGen - AI Manga Generator',
  description: 'Create stunning manga artwork using AI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${bangers.variable} ${comicNeue.variable} font-comic`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}

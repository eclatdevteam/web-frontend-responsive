import { Inter, Work_Sans } from 'next/font/google';

// Configure Inter
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter', // Optional: for CSS variable usage
});

// Configure Work Sans
export const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans', // Optional: for CSS variable usage
});
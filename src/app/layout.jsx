import { cn } from '@/components/utils';
import { montserrat } from '@/styles/fonts';
import '@/styles/globals.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false;

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  const fonts = [montserrat.className, montserrat.variable];
  return (
    <html lang="en">
      <body className={cn(fonts, 'flex min-h-svh flex-col')}>{children}</body>
    </html>
  );
}

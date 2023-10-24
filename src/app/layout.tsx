import { Inter } from 'next/font/google';
import ProviderWrapper from '~/components/provider-wrapper';
import SiteFooter from '~/components/site-footer';
import SiteHeader from '~/components/site-header';
import TailwindIndicator from '~/components/tailwind-indicator';
import { cn } from '~/utils/cn';
import './globals.css';

export const metadata = {
  title: {
    default: 'Piverlc',
    template: '%s | Piverlc',
  },
  description: 'Blog by Piverlc',
  icons: {
    icon: '/favicon.ico',
  },
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en' className={cn('bg-mid-night text-white', inter.variable)}>
      <body className='max-w-full antialiased'>
        <ProviderWrapper>
          <SiteHeader />
          <main className='container m-auto'>{children}</main>
          <TailwindIndicator />
          <SiteFooter />
        </ProviderWrapper>
      </body>
    </html>
  );
}

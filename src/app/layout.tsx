import { Inter } from 'next/font/google';
import ProviderWrapper from '~/components/ProviderWrapper';
import SiteHeader from '~/components/SiteHeader';
import TailwindIndicator from '~/components/TailwindIndicator';
import SiteFooter from '~/components/site-footer';
import { cn } from '~/utils/cn';
import './globals.css';

export const metadata = {
  title: {
    default: 'Piverlc',
    template: '%s | Piverlc',
  },
  description: 'Blog by piverlc',
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
    <html lang='en' className={cn('bg-midnight text-white', inter.variable)}>
      <body className='max-w-full antialiased'>
        <ProviderWrapper>
          <SiteHeader />
          <main>{children}</main>
          <TailwindIndicator />
          <SiteFooter />
        </ProviderWrapper>
      </body>
    </html>
  );
}

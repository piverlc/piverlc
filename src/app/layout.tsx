import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import ProviderWrapper from '~/components/provider-wrapper';
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

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang='en'
      className={cn(
        'bg-white text-black dark:bg-mid-night-dark dark:text-white',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className='mx-4 mb-40 mt-8 flex max-w-2xl flex-col antialiased md:flex-row lg:mx-auto'>
        <main className='flex min-w-0 flex-auto flex-col px-2 md:px-0'>
          <ProviderWrapper>
            <SiteHeader />
            {children}
            <TailwindIndicator />
          </ProviderWrapper>
        </main>
      </body>
    </html>
  );
}

'use client';

import { ThemeProvider } from '@wits/next-themes';
import { Fragment, type FC } from 'react';

type ProviderWrapperProps = {
  children?: React.ReactNode;
};

const ProviderWrapper: FC<ProviderWrapperProps> = ({ children }) => {
  return (
    <Fragment>
      <div className='flex min-h-screen flex-col'>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          {children}
        </ThemeProvider>
      </div>
    </Fragment>
  );
};

export default ProviderWrapper;

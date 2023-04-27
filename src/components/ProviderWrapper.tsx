'use client';

import { Fragment, type FC } from 'react';

type ProviderWrapperProps = {
  children?: React.ReactNode;
};

const ProviderWrapper: FC<ProviderWrapperProps> = ({ children }) => {
  return <Fragment>{children}</Fragment>;
};

export default ProviderWrapper;

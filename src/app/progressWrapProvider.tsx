
'use client';

import { ProgressProvider } from '@bprogress/next/app';

const ProgressWrapProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProgressProvider
      height="4px"
      color="#2E3A49"
      options={{ showSpinner: false }}
      shallowRouting
    >
      {children}
    </ProgressProvider>
  );
};

export default ProgressWrapProvider;
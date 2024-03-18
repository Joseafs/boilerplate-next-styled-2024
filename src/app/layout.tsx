import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { FC, PropsWithChildren } from 'react';

import { StyledComponentsRegistry } from '~/theme/StyledComponentsRegistry';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  description: 'Generated with next 14 and styled-components for new challenges and projects',
  icons: { icon: '/images/favicon.png' },
  title: 'Boilerplate Next Styled 2024',
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html lang="en">
    <body className={inter.className}>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </body>
  </html>
);

export default RootLayout;

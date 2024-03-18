'use client';

import { FC, useCallback } from 'react';

import { Button } from '~/components/Button';

import { ScreenCentralized } from './styles';

export const HomeScreen: FC = () => {
  const handleClick = useCallback(() => {
    alert('Clicked me!');
  }, []);

  return (
    <main>
      <ScreenCentralized>
        <h1>This is just a start page</h1>
        <Button onClick={handleClick}>Lorem</Button>
      </ScreenCentralized>
    </main>
  );
};

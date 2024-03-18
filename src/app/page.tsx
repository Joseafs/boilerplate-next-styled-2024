import { Metadata } from 'next';

import { Button } from '~/components/Button';

export const metadata: Metadata = {
  title: 'Start page',
};

export default function Example() {
  return (
    <main>
      <div>
        <h1>Start Page - Boilerplate Next 14 + styled-components</h1>
        <Button>Styled button</Button>
      </div>
    </main>
  );
}

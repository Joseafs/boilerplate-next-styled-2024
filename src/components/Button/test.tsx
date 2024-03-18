import { render } from '@testing-library/react';

import { snapshotYamamotoName } from '~/utils/mocks/snapshotMockValues';

import { Button } from '.';

describe('ButtonText', () => {
  test('Should match snapshot', () => {
    const { container } = render(<Button />);
    expect(container).toMatchSnapshot();
  });

  test('Should button render disabled', () => {
    const { getByText } = render(<Button disabled>{snapshotYamamotoName}</Button>);
    const button = getByText(snapshotYamamotoName);

    expect(button).toBeDisabled();
  });

  test.only('Should background-color of button be red', () => {
    const { getByText } = render(<Button>{snapshotYamamotoName}</Button>);
    const button = getByText(snapshotYamamotoName);

    expect(button).toHaveStyle('background-color: red');
  });
});

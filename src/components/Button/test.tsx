import { render } from '@testing-library/react';

import { Button } from '.';

const buttonText = 'Click me';

describe('ButtonText', () => {
  test('Should match snapshot', () => {
    const { container } = render(<Button />);
    expect(container).toMatchSnapshot();
  });

  test('Should button render disabled', () => {
    const { getByText } = render(<Button disabled>{buttonText}</Button>);
    const button = getByText(buttonText);

    expect(button).toBeDisabled();
  });

  test.only('Should background-color of button be red', () => {
    const { getByText } = render(<Button>{buttonText}</Button>);
    const button = getByText(buttonText);

    expect(button).toHaveStyle('background-color: red');
  });
});

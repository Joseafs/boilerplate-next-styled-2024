import { render } from '@testing-library/react';
import { Button } from '.';


describe('ButtonText', () => {
  test('Should match snapshot', () => {
    const { container } = render(<Button />);
  expect(container).toMatchSnapshot();
  });

  test('Should button render disabled', () => {
    const buttonText = 'Click me';

    const { getByText } = render(<Button disabled>{buttonText}</Button>); 
    const button = getByText(buttonText); 
  
    expect(button).toBeDisabled(); 
  });

});

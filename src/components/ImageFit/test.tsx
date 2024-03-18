import { render } from '@testing-library/react';

import { ImageFit } from '.';

describe('ImageFit', () => {
  test('Should match snapshot', () => {
    const { container } = render(<ImageFit src={''} description={''} width={0} height={0} />);
    expect(container).toMatchSnapshot();
  });
});

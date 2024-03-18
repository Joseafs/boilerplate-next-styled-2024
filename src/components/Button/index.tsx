import { FC } from 'react';

import { Root } from './styles';
import { Props } from './types';

export const Button: FC<Props> = ({ children, type, disabled }) => {
  return (
    <Root type={type} disabled={disabled}>
      {children}
    </Root>
  );
};

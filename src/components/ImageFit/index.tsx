import { FC } from 'react';

import { fixRootPath } from '~/utils/fixRootPath';

import { Root } from './styles';
import { Props } from './types';

export const ImageFit: FC<Props> = ({ description, height, src, width, className, objectFit }) => (
  <Root
    className={className}
    src={fixRootPath(src)}
    alt={description}
    width={width}
    height={height}
    objectFit={objectFit}
  />
);

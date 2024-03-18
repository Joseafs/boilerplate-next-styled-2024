'use client';

import styled from 'styled-components';

export const Root = styled.button`
  background-color: ${({ theme }) => theme.palette.secondary.main};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

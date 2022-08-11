/* eslint-disable import/no-unresolved */
import styled from 'styled-components';
import { applyMediaQuery } from 'styles/mediaQuery';

const StyledRoot = styled.div`
  /* width: 100vw;
  min-height: 100vh; */

  ${applyMediaQuery('mobile')} {
    display: block;
  }
`;

const Text = styled.p`
  font-family: 'Noto Sans';
  font-size: ${({ theme: { font } }) => font.size.regular};
`;

export { StyledRoot, Text };

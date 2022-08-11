/* eslint-disable import/no-unresolved */
import styled from 'styled-components';
import { applyMediaQuery } from 'styles/mediaQuery';

const StyledRoot = styled.div`
  width: 70vw;
  height: 30vw;

  .img {
    width: 10rem;
    height: 3rem;
  }

  ${applyMediaQuery('mobile')} {
    display: block;
  }
`;

const Text = styled.p`
  font-family: 'Noto Sans';
  font-size: ${({ theme: { font } }) => font.size.regular};
`;

export { StyledRoot, Text };

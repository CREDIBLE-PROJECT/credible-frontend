/* eslint-disable import/no-unresolved */
import styled from 'styled-components';
import { applyMediaQuery } from 'styles/mediaQuery';

const StyledRoot = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${({ theme: { color } }) => color.LigterBlue};
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

const SubText = styled.p`
  font-family: 'Noto Sans';
  font-size: ${({ theme: { font } }) => font.size.small};
  color: ${({ theme: { color } }) => color.grey};
`;

export { StyledRoot, Text, SubText };

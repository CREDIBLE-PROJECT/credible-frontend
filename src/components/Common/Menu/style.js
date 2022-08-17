/* eslint-disable import/no-unresolved */
import styled from 'styled-components';
import { applyMediaQuery } from 'styles/mediaQuery';

const StyledRoot = styled.div`
  width: 100vw;
  height: 15vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme: { color } }) => color.white};
  margin-top: 1.5rem;

  img {
    width: 30rem;
    height: 7rem;
    margin-bottom: 0.8rem;
  }

  ${applyMediaQuery('mobile')} {
    display: block;
  }
`;

const MenuText = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: 'Noto Sans';
  font-size: ${({ theme: { font } }) => font.size.semiSmall};

  p {
    margin-right: 8rem;
  }
`;

export { StyledRoot, MenuText };

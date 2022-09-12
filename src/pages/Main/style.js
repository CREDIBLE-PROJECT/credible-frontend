/* eslint-disable import/no-unresolved */
import styled from 'styled-components';
import { applyMediaQuery } from 'styles/mediaQuery';

const StyledRoot = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme: { color } }) => color.lightestBlue};

  ${applyMediaQuery('mobile')} {
    display: block;
  }
`;

const MainImg = styled.img`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100vw;
  height: 70vh;
  object-fit: cover;
`;

const Text = styled.p`
  font-family: 'Noto Sans', [monospace];
  font-size: ${({ theme: { font } }) => font.size.regular};
`;

const LoginText = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  left: 41vw;

  font-family: 'Noto Sans', [monospace];
  font-size: ${({ theme: { font } }) => font.size.small};
  color: ${({ theme: { color } }) => color.grey};

  p {
    margin-right: 2.4rem;
    margin-top: 1.7rem;
  }
`;

const ImgText = styled.p`
  font-family: 'Noto Sans', [monospace];
  font-weight: ${({ theme: { font } }) => font.weight.bold};
  font-size: ${({ theme: { font } }) => font.size.medium};
  color: ${({ theme: { color } }) => color.blue};

  position: absolute;
  top: 25vw;
  right: 61vw;
  p {
    margin-right: 2.4rem;
    margin-top: 1.7rem;
  }
`;

const SubText = styled.p`
  font-family: 'Noto Sans', [monospace];
  font-size: ${({ theme: { font } }) => font.size.small};
  color: ${({ theme: { color } }) => color.lighterBlue};
`;

export { StyledRoot, Text, LoginText, SubText, MainImg, ImgText };

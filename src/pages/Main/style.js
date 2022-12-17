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
  height: 80vh;
  object-fit: cover;
`;

const Text = styled.p`
  font-family: 'Noto Sans', [monospace];
  font-size: ${({ theme: { font } }) => font.size.regular};
`;

const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-left: auto;
`;

const ModalButton = styled.p`
  width: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  cursor: pointer;
  margin-top: 1.7rem;
  font-family: 'Noto Sans', [monospace];
  font-size: ${({ theme: { font } }) => font.size.small};
  color: ${({ theme: { color } }) => color.grey};
  background-color: ${({ theme: { color } }) => color.lightestBlue};
`;

const ModalBackdrop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 999;
  position: absolute;
  width: 40vw;
  height: 27vh;

  background-color: ${({ theme: { color } }) => color.white};
  border-radius: 2rem;
  box-shadow: 3px 3px 10px 0 grey;
  margin-top: 6rem;
`;

const ModalView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-family: 'Noto Sans', [monospace];
    font-weight: ${({ theme: { font } }) => font.weight.bold};
    font-size: ${({ theme: { font } }) => font.size.medium};
    position: absolute;
    top: 3.7vw;
  }
`;

const CloseButton = styled.button`
  width: 7vw;
  height: 4vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
`;

const LoginText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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

export {
  StyledRoot,
  TopBar,
  ModalButton,
  ModalBackdrop,
  ModalView,
  CloseButton,
  Text,
  LoginText,
  MainImg,
  ImgText,
};

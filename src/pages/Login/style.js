/* eslint-disable import/no-unresolved */
import styled from 'styled-components';
import { applyMediaQuery } from 'styles/mediaQuery';

const StyledRoot = styled.div`
  width: 100vw;
  min-height: 100vw;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;

  background-color: ${({ theme: { color } }) => color.lightestBlue};

  ${applyMediaQuery('mobile')} {
    display: block;
  }
`;

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;

  img {
    margin-top: 2rem;
    width: 40rem;
    height: 18rem;
  }
`;

const Text = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Noto Sans';
  font-size: ${({ theme: { font } }) => font.size.small};
  font-weight: ${({ theme: { font } }) => font.weight.bold};
  line-height: 1.2;
  color: ${({ theme: { color } }) => color.blue};
  margin-top: 1rem;
  margin-bottom: 3rem;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  margin: 0;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  padding: 1rem;
  margin: 0.7rem;

  input {
    width: 25rem;
    outline: none;
    border: none;
    border-bottom: 1px solid ${({ theme: { color } }) => color.blue};
    background: transparent;
  }

  input::placeholder {
    font-weight: ${({ theme: { font } }) => font.weight.light};
  }
`;

const LoginButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  padding: 1rem;

  width: 17rem;
  outline: none;
  border: none;
  border-radius: 1rem;
  margin: 1.7rem;
  letter-spacing: 0.1rem;
  background-color: ${({ theme: { color } }) => color.lighterBlue};
`;

export { StyledRoot, MainBox, Text, LoginBox, LoginForm, LoginButton };

/* eslint-disable import/no-unresolved */
import styled from 'styled-components';
import { applyMediaQuery } from 'styles/mediaQuery';

const StyledRoot = styled.div`
  width: 100vw;
  height: 150vh;

  background-color: ${({ theme: { color } }) => color.lightestBlue};

  ${applyMediaQuery('mobile')} {
    display: block;
  }
`;
const TopNavi = styled.p`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  font-family: 'Noto Sans', [monospace];
  font-size: ${({ theme: { font } }) => font.size.small};
  color: ${({ theme: { color } }) => color.grey};

  p {
    margin-right: 2.4rem;
    margin-top: 1.7rem;
  }
`;

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;

  img {
    width: 30rem;
    height: 18rem;
  }
`;

const Text = styled.p`
  display: flex;
  flex-direction: column;
  font-family: 'Noto Sans';
  font-size: ${({ theme: { font } }) => font.size.micro};
  margin-bottom: 0;

  p {
    text-align: left;
  }
`;

const JoinForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  font-family: 'Noto Sans';
  padding: 1rem;
  margin: 0.7rem;
  input {
    width: 25rem;
    outline: none;
    border: none;
    padding: 1rem;
  }

  input::placeholder {
    font-weight: ${({ theme: { font } }) => font.weight.light};
  }
`;

const BirthBox = styled.form`
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  margin: 0.7rem;

  input {
    outline: none;
    border: none;
    width: 8rem;
    padding: 1rem;
    margin: 0.3rem;
  }
`;

const SelectBox = styled.select`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  width: 25rem;
  padding: 1rem;
  margin: 0.7rem;
  outline: none;
  border: none;
`;

const JoinButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  padding: 1rem;

  width: 25rem;
  outline: none;
  border: none;
  margin: 1.7rem;
  letter-spacing: 0.1rem;
  background-color: ${({ theme: { color } }) => color.lighterBlue};
`;

export {
  StyledRoot,
  TopNavi,
  MainBox,
  Text,
  JoinForm,
  BirthBox,
  SelectBox,
  JoinButton,
};

/* eslint-disable import/no-unresolved */
import styled from 'styled-components';

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 999;
  position: absolute;
  width: 39vw;
  height: 20vh;
  top: -1.3vw;
  background-color: ${({ theme: { color } }) => color.white};
  border: none;
  margin-top: 6rem;

  img {
    margin-top: 5.5rem;
  }
`;

const LoadingText = styled.div`
  font-family: 'Noto Sans', [monospace];
  font-weight: ${({ theme: { font } }) => font.weight.bold};
  font-size: ${({ theme: { font } }) => font.size.medium};
  text-align: center;
  position: absolute;
  top: 0.8vw;
`;

export { Background, LoadingText };

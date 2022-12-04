/* eslint-disable import/no-unresolved */
import styled from 'styled-components';

const StyledRoot = styled.div`
  width: 100vw;
  height: 90vw;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme: { color } }) => color.lightestBlue};
  /* justify-content: center;
  align-items: center; */
`;

const LoginText = styled.div`
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

const DetailText = styled.p`
  color: ${({ theme: { color } }) => color.blue};
  font-size: ${({ theme: { font } }) => font.size.regular};
  font-weight: ${({ theme: { font } }) => font.weight.bold};
  position: absolute;
  left: 37.2rem;
  top: 108.2rem;
`;

// const DefaultText = styled.p`
//   color: ${({ theme: { color } }) => color.grey};
//   font-size: ${({ theme: { font } }) => font.size.small};
//   font-weight: ${({ theme: { font } }) => font.weight.light};
//   position: absolute;
//   left: 79rem;
//   top: 34.5rem;
// `;

export { StyledRoot, LoginText, DetailText };

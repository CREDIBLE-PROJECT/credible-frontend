/* eslint-disable import/no-unresolved */
import styled from 'styled-components';

const StyledRoot = styled.div`
  width: 38vw;
  height: 75vh;
  display: flex;
  flex-direction: column;
  position: absolute;
  position: relative;
  /* left: 83.8rem; */
  left: 78.8rem;
  top: 13.4rem;
  background: ${({ theme: { color } }) => color.white};
  border-radius: 1.5rem;
`;

const DetailTitle = styled.p`
  font-family: 'Noto Sans', [monospace];

  .main {
    color: ${({ theme: { color } }) => color.blue};
    font-size: ${({ theme: { font } }) => font.size.semiMedium};
    font-weight: ${({ theme: { font } }) => font.weight.bold};
    position: absolute;
    left: 20.5rem;
    top: 5rem;
  }

  .sub {
    color: ${({ theme: { color } }) => color.blue};
    font-size: ${({ theme: { font } }) => font.size.semiMedium};
    font-weight: ${({ theme: { font } }) => font.weight.bold};
    position: absolute;
    left: 12.5rem;
    top: 35rem;
  }
`;

const DetailBoxF = styled.div`
  font-family: 'Noto Sans', [monospace];
  font-size: ${({ theme: { font } }) => font.size.regular};
  font-weight: ${({ theme: { font } }) => font.weight.semiBold};
  width: 31vw;
  height: 13vh;
  background: ${({ theme: { color } }) => color.lightestBlue};
  border-radius: 1.5rem;
  position: absolute;
  left: 5.5rem;
  top: 14rem;

  p {
    margin-left: 4.8rem;
    margin-top: 4.3rem;
  }
`;

const DetailBoxS = styled.div`
  font-family: 'Noto Sans', [monospace];
  font-size: ${({ theme: { font } }) => font.size.regular};
  font-weight: ${({ theme: { font } }) => font.weight.semiBold};
  width: 31vw;
  height: 13vh;
  background: ${({ theme: { color } }) => color.lightestBlue};
  border-radius: 1.5rem;
  position: absolute;
  left: 5.5rem;
  top: 44rem;

  p {
    margin-left: 6.5rem;
    margin-top: 4.3rem;
  }
`;

export { StyledRoot, DetailTitle, DetailBoxF, DetailBoxS };

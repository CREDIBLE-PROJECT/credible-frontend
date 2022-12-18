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
  cursor: pointer;

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
  left: 38rem;
  top: 108.8rem;
  cursor: pointer;
`;

const CauseContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const CauseText = styled.div`
  display: flex;
  flex-direction: row;
  font-family: 'Noto Sans', [monospace];
  font-size: ${({ theme: { font } }) => font.size.semiMedium};
  font-weight: ${({ theme: { font } }) => font.weight.bold};
  position: absolute;
  left: 83.8rem;
  top: 40.4rem;

  .underline {
    text-decoration-line: underline;
  }
`;

const CauseSubText = styled.div`
  font-family: 'Noto Sans', [monospace];
  font-size: ${({ theme: { font } }) => font.size.semiMedium};
  font-weight: ${({ theme: { font } }) => font.weight.bold};
  position: absolute;
  left: 118.8rem;
  top: 62.9rem;
`;

const CauseMain = styled.div`
  width: 30vw;
  height: 15.5vh;
  background: ${({ theme: { color } }) => color.white};
  border-radius: 1.5rem;
  position: absolute;
  left: 83.8rem;
  top: 46.7rem;

  li {
    list-style-type: disc;
    font-family: 'Noto Sans', [monospace];
    font-size: ${({ theme: { font } }) => font.size.regular};
    font-weight: ${({ theme: { font } }) => font.weight.semiBold};
    color: ${({ theme: { color } }) => color.blue};
    margin-left: 5.8rem;
    margin-top: 2.8rem;
  }
`;

const TipContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const TipMain = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  left: 83.8rem;
  top: 72rem;
`;

const TipImg = styled.img`
  width: 6.8rem;
  height: 6.8rem;
`;

const TipMainText = styled.p`
  font-family: 'Noto Sans', [monospace];
  font-size: ${({ theme: { font } }) => font.size.semiMedium};
  font-weight: ${({ theme: { font } }) => font.weight.bold};
  margin-left: 1.8rem;
`;

const TipDetail = styled.div`
  li {
    list-style-type: disc;
    font-family: 'Noto Sans', [monospace];
    font-size: ${({ theme: { font } }) => font.size.regular};
    font-weight: ${({ theme: { font } }) => font.weight.semiBold};
    color: ${({ theme: { color } }) => color.blue};
    margin-left: 5.8rem;
    margin-top: 2.2rem;
  }

  .first {
    width: 30vw;
    height: 8vh;
    background: ${({ theme: { color } }) => color.white};
    border-radius: 1.5rem;
    position: absolute;
    left: 83.8rem;
    top: 80.8rem;
  }

  .second {
    width: 30vw;
    height: 8vh;
    background: ${({ theme: { color } }) => color.white};
    border-radius: 1.5rem;
    position: absolute;
    left: 83.8rem;
    top: 89.8rem;
  }
`;

// const TipExpect = styled.div`
//   display: flex;
//   flex-direction: row;
//   position: absolute;
//   left: 108.8rem;
//   top: 101rem;
//   font-family: 'Noto Sans', [monospace];
//   font-size: ${({ theme: { font } }) => font.size.regular};
//   font-weight: ${({ theme: { font } }) => font.weight.semiBold};

//   .black {
//     margin-right: 0.6rem;
//   }

//   .blue {
//     color: ${({ theme: { color } }) => color.blue};
//   }
// `;

export {
  StyledRoot,
  LoginText,
  DetailText,
  CauseText,
  CauseContent,
  CauseMain,
  CauseSubText,
  TipContent,
  TipMain,
  TipImg,
  TipMainText,
  TipDetail,
};

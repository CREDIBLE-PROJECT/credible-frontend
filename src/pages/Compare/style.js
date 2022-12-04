/* eslint-disable import/no-unresolved */
import styled from 'styled-components';

const StyledRoot = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme: { color } }) => color.lightestBlue};
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

const CompareMainBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const CompareMainText = styled.div`
  display: flex;
  flex-direction: row;
  font-family: 'Noto Sans', [monospace];
  font-size: ${({ theme: { font } }) => font.size.semiMedium};
  font-weight: ${({ theme: { font } }) => font.weight.bold};
  position: absolute;
  left: 15rem;
  top: 33rem;
`;

const CompareBox = styled.div`
  width: 80vw;
  height: 37vh;
  background: ${({ theme: { color } }) => color.white};
  border-radius: 1.5rem;
  position: absolute;
  left: 15rem;
  top: 39rem;
  padding: 5rem;
`;
const CompareMain = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const MyScoreBox = styled.div`
  width: 40vw;
  height: 25vh;
  background: ${({ theme: { color } }) => color.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: solid 1px;
`;

const MyScoreText = styled.p`
  font-family: 'Noto Sans';
  font-size: ${({ theme: { font } }) => font.size.semiMedium};
  font-weight: ${({ theme: { font } }) => font.weight.bold};
  padding-top: 3rem;
  padding-bottom: 6rem;
`;

const MyScore = styled.p`
  font-family: 'Noto Sans';
  font-size: ${({ theme: { font } }) => font.size.large};
  font-weight: ${({ theme: { font } }) => font.weight.bold};
`;

const MeanScoreBox = styled.div`
  width: 40vw;
  height: 25vh;
  background: ${({ theme: { color } }) => color.white};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MeanScoreText = styled.p`
  font-family: 'Noto Sans';
  font-size: ${({ theme: { font } }) => font.size.semiMedium};
  font-weight: ${({ theme: { font } }) => font.weight.bold};
  padding-top: 3rem;
  padding-bottom: 6rem;
`;

const MeanScore = styled.p`
  font-family: 'Noto Sans';
  font-size: ${({ theme: { font } }) => font.size.large};
  font-weight: ${({ theme: { font } }) => font.weight.bold};
`;

// const CompareResult = styled.div`
//   font-size: ${({ theme: { font } }) => font.size.regular};
//   display: flex;
//   padding-top: 6rem;
//   align-items: center;
//   font-family: 'Noto Sans';
//   font-weight: ${({ theme: { font } }) => font.weight.bold};
//   flex-direction: column;
// `;

// const MainMajorCompare = styled.div`
//   flex-direction: row;
//   font-family: 'Noto Sans', [monospace];
//   font-size: ${({ theme: { font } }) => font.size.semiMedium};
//   font-weight: ${({ theme: { font } }) => font.weight.bold};
//   position: absolute;
//   left: 15rem;
//   top: 78rem;
// `;

// const MajorCompareText = styled.div`
//   display: flex;
//   flex-direction: row;
//   font-family: 'Noto Sans', [monospace];
//   font-size: ${({ theme: { font } }) => font.size.semiMedium};
//   font-weight: ${({ theme: { font } }) => font.weight.bold};
//   left: 15rem;
//   top: 95rem;
//   margin-bottom: 3rem;
// `;

// const MajorCompareBox = styled.div`
//   width: 80vw;
//   height: 45vh;
//   background: ${({ theme: { color } }) => color.white};
//   border-radius: 1.5rem;
//   display: flex;
//   flex-direction: column;

//   .main {
//     color: ${({ theme: { color } }) => color.blue};
//     font-size: ${({ theme: { font } }) => font.size.semiMedium};
//     margin-left: 6.5rem;
//     margin-top: 2rem;
//   }

//   li {
//     font-size: ${({ theme: { font } }) => font.size.semiMedium};
//     margin-left: 9rem;
//     margin-top: 2rem;
//   }

//   .sub {
//     color: ${({ theme: { color } }) => color.grey};
//     font-size: ${({ theme: { font } }) => font.size.micro};
//     font-weight: ${({ theme: { font } }) => font.weight.light};
//     margin-left: 12rem;
//     margin-top: 2rem;
//   }
// `;

export {
  StyledRoot,
  LoginText,
  CompareMainBox,
  CompareMainText,
  CompareBox,
  CompareMain,
  MyScoreBox,
  MyScoreText,
  MyScore,
  MeanScoreBox,
  MeanScoreText,
  MeanScore,
};

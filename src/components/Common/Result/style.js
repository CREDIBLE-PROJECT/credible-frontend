/* eslint-disable import/no-unresolved */
import styled from 'styled-components';

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  font-family: 'Noto Sans', [monospace];
`;

const ReportMain = styled.div`
  display: flex;
  flex-direction: row;
  font-family: 'Noto Sans', [monospace];
  font-size: ${({ theme: { font } }) => font.size.regular};
  font-weight: ${({ theme: { font } }) => font.weight.bold};
  margin: 3rem 0rem 3rem 25rem;
  position: absolute;

  .blue {
    color: ${({ theme: { color } }) => color.blue};
  }
`;

const ReportImg = styled.img`
  width: 70rem;
  height: 83rem;
  top: 7rem;
  left: 6.6rem;
  position: absolute;
`;

const ReportContent = styled.div`
  .date {
    color: ${({ theme: { color } }) => color.grey};
    position: absolute;
    left: 20.5rem;
    top: 10rem;
  }

  .pig {
    position: absolute;
    width: 5rem;
    height: 5rem;
    left: 38rem;
    top: 13rem;
  }
`;

const ReportTitle = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  left: 29.5rem;
  top: 19.8rem;
  font-size: ${({ theme: { font } }) => font.size.semiMedium};
  font-weight: ${({ theme: { font } }) => font.weight.bold};

  .sub1 {
    color: ${({ theme: { color } }) => color.grey};
  }

  .sub2 {
    color: ${({ theme: { color } }) => color.blue};
  }
`;

const ReportItem = styled.div`
  font-weight: ${({ theme: { font } }) => font.weight.light};
  color: ${({ theme: { color } }) => color.grey};

  .item {
    position: absolute;
    left: 20.5rem;
    top: 30.2rem;
  }

  .percent {
    position: absolute;
    left: 59.5rem;
    top: 30.2rem;
  }

  .total {
    position: absolute;
    left: 20.5rem;
    top: 75.2rem;
  }

  .totalPercent {
    position: absolute;
    left: 59.5rem;
    top: 75.2rem;
  }
`;

// const HorizonLine = styled.hr`
//   width: ${props => props.width};
//   border: dashed 0.05rem ${({ theme: { color } }) => color.lighterGrey};

//   position: absolute;
//   left: 20rem;
//   top: 32.8rem;
// `;

const FirstHorizon = styled.hr`
  width: 42.6rem;
  border: dashed 0.05rem ${({ theme: { color } }) => color.lighterGrey};

  position: absolute;
  left: 20rem;
  top: 32.8rem;
`;

const ReportText = styled.div`
  display: flex;
  flex-direction: row;
  color: ${({ theme: { color } }) => color.lighterGrey};
  font-size: ${({ theme: { font } }) => font.size.small};

  .report1 {
    position: absolute;
    left: 20.5rem;
    top: 40.2rem;
  }

  .percent1 {
    position: absolute;
    left: 58.2rem;
    top: 40.2rem;
  }

  .report2 {
    position: absolute;
    left: 20.5rem;
    top: 45.2rem;
  }

  .percent2 {
    position: absolute;
    left: 58.2rem;
    top: 45.2rem;
  }

  .report3 {
    position: absolute;
    left: 20.5rem;
    top: 50.2rem;
  }

  .percent3 {
    position: absolute;
    left: 58.2rem;
    top: 50.2rem;
  }

  .report4 {
    position: absolute;
    left: 20.5rem;
    top: 55.2rem;
  }

  .percent4 {
    position: absolute;
    left: 58.2rem;
    top: 55.2rem;
  }

  .report5 {
    position: absolute;
    left: 20.5rem;
    top: 60.2rem;
  }

  .percent5 {
    position: absolute;
    left: 58.2rem;
    top: 60.2rem;
  }

  .report6 {
    position: absolute;
    left: 20.5rem;
    top: 65.2rem;
  }

  .percent6 {
    position: absolute;
    left: 58.2rem;
    top: 65.2rem;
  }
`;

const SecondHorizon = styled.hr`
  width: 42.6rem;
  border: dashed 0.05rem ${({ theme: { color } }) => color.lighterGrey};

  position: absolute;
  left: 20rem;
  top: 72.6rem;
`;

const ThirdHorizon = styled.hr`
  width: 42.6rem;
  border: dashed 0.05rem ${({ theme: { color } }) => color.lighterGrey};

  position: absolute;
  left: 20rem;
  top: 77.8rem;
`;

const DetailText = styled.p`
  color: ${({ theme: { color } }) => color.blue};
  font-size: ${({ theme: { font } }) => font.size.regular};
  font-weight: ${({ theme: { font } }) => font.weight.bold};
  position: absolute;
  left: 38.4rem;
  top: 80.8rem;
`;

export {
  StyledRoot,
  FirstHorizon,
  ReportMain,
  ReportImg,
  ReportContent,
  ReportTitle,
  ReportItem,
  ReportText,
  SecondHorizon,
  ThirdHorizon,
  DetailText,
};

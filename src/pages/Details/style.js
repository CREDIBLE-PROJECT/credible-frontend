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

const ProfileBox = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  align-items: center;
  margin: 3rem 3rem 0rem 3rem;
`;

const ProfileText = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Noto Sans', [monospace];
  margin-left: 2rem;
  margin-right: 2rem;

  .small {
    font-size: ${({ theme: { font } }) => font.size.semiSmall};
    font-weight: ${({ theme: { font } }) => font.weight.bold};
    margin-bottom: 1.3rem;
  }

  .regular {
    font-size: ${({ theme: { font } }) => font.size.semiMedium};
    font-weight: ${({ theme: { font } }) => font.weight.bold};
  }
`;

const ProfileImg = styled.img`
  width: 7rem;
  height: 7rem;
`;

const DetailText = styled.p`
  color: ${({ theme: { color } }) => color.blue};
  font-size: ${({ theme: { font } }) => font.size.regular};
  font-weight: ${({ theme: { font } }) => font.weight.bold};
  position: absolute;
  left: 37.2rem;
  top: 108.2rem;
`;

const DetailContent = styled.div`
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
    left: 11.5rem;
    top: 4rem;
  }

  .sub {
    color: ${({ theme: { color } }) => color.grey};
    font-size: ${({ theme: { font } }) => font.size.micro};
    font-weight: ${({ theme: { font } }) => font.weight.light};
    position: absolute;
    left: 24.8rem;
    top: 9rem;
  }
`;

const DetailBox = styled.div`
  font-family: 'Noto Sans', [monospace];
  font-size: ${({ theme: { font } }) => font.size.regular};
  font-weight: ${({ theme: { font } }) => font.weight.semiBold};

  p {
    margin-left: 6.5rem;
    margin-top: 2.5rem;
  }

  li {
    list-style-type: disc;
    margin-left: 8.5rem;
    margin-top: 1.5rem;
  }
`;

const DetailBoxF = styled.div`
  width: 31vw;
  height: 13vh;
  background: ${({ theme: { color } }) => color.lightestBlue};
  border-radius: 1.5rem;
  position: absolute;
  left: 5.5rem;
  top: 14rem;
`;

const DetailBoxS = styled.div`
  width: 31vw;
  height: 13vh;
  background: ${({ theme: { color } }) => color.lightestBlue};
  border-radius: 1.5rem;
  position: absolute;
  left: 5.5rem;
  top: 28rem;
`;

const DetailBoxT = styled.div`
  width: 31vw;
  height: 13vh;
  background: ${({ theme: { color } }) => color.lightestBlue};
  border-radius: 1.5rem;
  position: absolute;
  left: 5.5rem;
  top: 42rem;
`;

export {
  StyledRoot,
  LoginText,
  ProfileBox,
  ProfileText,
  ProfileImg,
  DetailText,
  DetailContent,
  DetailTitle,
  DetailBox,
  DetailBoxF,
  DetailBoxS,
  DetailBoxT,
};

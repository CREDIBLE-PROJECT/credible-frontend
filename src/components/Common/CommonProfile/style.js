/* eslint-disable import/no-unresolved */
import styled from 'styled-components';

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  font-family: 'Noto Sans', [monospace];
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

export { StyledRoot, ProfileBox, ProfileText, ProfileImg };

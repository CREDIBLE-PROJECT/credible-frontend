/* eslint-disable import/no-unresolved */
import React from 'react';
import { MainLogo } from 'assets';
import { StyledRoot, Text } from './style';

function Compare() {
  return (
    <StyledRoot>
      <Text>Compare page</Text>
      <img src={MainLogo} alt="로고" />
    </StyledRoot>
  );
}

export default Compare;

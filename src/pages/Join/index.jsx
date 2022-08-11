/* eslint-disable import/no-unresolved */
import React from 'react';
import { MainLogo } from 'assets';
import { StyledRoot, Text } from './style';

function Join() {
  return (
    <StyledRoot>
      <Text>Join page</Text>
      <img src={MainLogo} alt="로고" />
    </StyledRoot>
  );
}

export default Join;

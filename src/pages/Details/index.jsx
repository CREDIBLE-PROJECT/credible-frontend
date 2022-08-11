/* eslint-disable import/no-unresolved */
import React from 'react';
import { MainLogo } from 'assets';
import { StyledRoot, Text } from './style';

function Details() {
  return (
    <StyledRoot>
      <Text>Details page</Text>
      <img src={MainLogo} alt="로고" />
    </StyledRoot>
  );
}

export default Details;

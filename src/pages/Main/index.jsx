/* eslint-disable import/no-unresolved */
import React from 'react';
import { MainLogo } from 'assets';
import { Menu } from 'components';
import { StyledRoot, Text, SubText } from './style';

function Main() {
  return (
    <StyledRoot>
      <Menu />
      <Text>Main page</Text>
      <SubText>hi</SubText>
      <img src={MainLogo} alt="로고" />
    </StyledRoot>
  );
}

export default Main;

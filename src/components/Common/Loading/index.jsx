/* eslint-disable import/no-unresolved */
import React from 'react';
import { SpinnerImg } from 'assets';

import { Background, LoadingText } from './style';

function Loading() {
  return (
    <Background>
      <LoadingText>신용정보를 불러오는 중입니다.</LoadingText>
      <img src={SpinnerImg} alt="로딩 중" />
    </Background>
  );
}
export default Loading;

/* eslint-disable import/no-unresolved */
import React from 'react';
import { StyledRoot, DetailTitle, DetailBoxF, DetailBoxS } from './style';

function Item3() {
  return (
    <StyledRoot>
      <DetailTitle>
        <p className="main">현재 나의 대출 이용횟수</p>
      </DetailTitle>
      <DetailBoxF>
        <p>현재 나의 대출 이용횟수는 1회 입니다.</p>
      </DetailBoxF>
      <DetailTitle>
        <p className="sub">다른 사람과 비교한 &apos;나의 대출 이용횟수&apos;</p>
      </DetailTitle>
      <DetailBoxS>
        <p>나의 대출 이용횟수는 상위 73% 입니다.</p>
      </DetailBoxS>
    </StyledRoot>
  );
}

export default Item3;

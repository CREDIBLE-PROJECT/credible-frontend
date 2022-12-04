/* eslint-disable import/no-unresolved */
import React from 'react';
import { StyledRoot, DetailTitle, DetailBoxF, DetailBoxS } from './style';

function Item6() {
  return (
    <StyledRoot>
      <DetailTitle>
        <p className="main">현재 나의 근무 기간</p>
      </DetailTitle>
      <DetailBoxF>
        <p>현재 나의 근무 기간은 0일 입니다.</p>
      </DetailBoxF>
      <DetailTitle>
        <p className="sub">다른 사람과 비교한 &apos;나의 근무 기간&apos;</p>
      </DetailTitle>
      <DetailBoxS>
        <p>나의 근무 기간은 상위 100% 입니다.</p>
      </DetailBoxS>
    </StyledRoot>
  );
}

export default Item6;

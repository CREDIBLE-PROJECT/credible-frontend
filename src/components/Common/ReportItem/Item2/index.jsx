/* eslint-disable import/no-unresolved */
import React from 'react';
import { StyledRoot, DetailTitle, DetailBoxF, DetailBoxS } from './style';

function Item2() {
  return (
    <StyledRoot>
      <DetailTitle>
        <p className="main">현재 나의 수입</p>
      </DetailTitle>
      <DetailBoxF>
        <p>현재 나의 수입은 월간 2,652,000원 입니다.</p>
      </DetailBoxF>
      <DetailTitle>
        <p className="sub">다른 사람과 비교한 &apos;나의 수입&apos;</p>
      </DetailTitle>
      <DetailBoxS>
        <p>나의 수입은 상위 52% 입니다.</p>
      </DetailBoxS>
    </StyledRoot>
  );
}

export default Item2;

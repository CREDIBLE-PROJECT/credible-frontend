/* eslint-disable import/no-unresolved */
import React from 'react';
import { StyledRoot, DetailTitle, DetailBoxF, DetailBoxS } from './style';

function Item4() {
  return (
    <StyledRoot>
      <DetailTitle>
        <p className="main">현재 나의 대출 상환기간</p>
      </DetailTitle>
      <DetailBoxF>
        <p>현재 나의 대출 상환기간까지 1039일 남았습니다.</p>
      </DetailBoxF>
      <DetailTitle>
        <p className="sub">다른 사람과 비교한 &apos;나의 대출 상환기간&apos;</p>
      </DetailTitle>
      <DetailBoxS>
        <p>나의 대출중인 금액은 상위 76% 입니다.</p>
      </DetailBoxS>
    </StyledRoot>
  );
}

export default Item4;

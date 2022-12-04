/* eslint-disable import/no-unresolved */
import React from 'react';
import { StyledRoot, DetailTitle, DetailBoxF, DetailBoxS } from './style';

function Item1() {
  return (
    <StyledRoot>
      <DetailTitle>
        <p className="main">현재 나의 대출중인 금액</p>
      </DetailTitle>
      <DetailBoxF>
        <p>현재 나의 대출중인 금액은 4,680,000원 입니다.</p>
      </DetailBoxF>
      <DetailTitle>
        <p className="sub">다른 사람과 비교한 &apos;대출중인 금액&apos;</p>
      </DetailTitle>
      <DetailBoxS>
        <p>나의 대출중인 금액은 상위 40% 입니다.</p>
      </DetailBoxS>
    </StyledRoot>
  );
}

export default Item1;

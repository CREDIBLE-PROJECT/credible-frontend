/* eslint-disable import/no-unresolved */
import React from 'react';
import { StyledRoot, DetailTitle, DetailBoxF, DetailBoxS } from './style';

function Item5() {
  return (
    <StyledRoot>
      <DetailTitle>
        <p className="main">현재 나의 주거지 소유 &amp; 주거 형태 여부</p>
      </DetailTitle>
      <DetailBoxF>
        <center>
          <p>
            현재 주거지를 소유하고 있지 않으며,
            <br />
            주거 형태는 월세입니다.
          </p>
        </center>
      </DetailBoxF>
      <DetailTitle>
        <p className="sub">다른 사람과 비교한 &apos;나의 주거 형태&apos;</p>
      </DetailTitle>
      <DetailBoxS>
        <p>나의 주거 형태는 상위 93% 입니다.</p>
      </DetailBoxS>
    </StyledRoot>
  );
}

export default Item5;

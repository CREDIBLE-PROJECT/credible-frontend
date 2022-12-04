/* eslint-disable import/no-unresolved */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, Result, CommonProfile } from 'components';
import { Tips } from 'assets';
import {
  StyledRoot,
  LoginText,
  DetailText,
  CauseContent,
  CauseText,
  CauseMain,
  CauseSubText,
  TipContent,
  TipMain,
  TipImg,
  TipMainText,
  TipDetail,
} from './style';

function Report() {
  const navigate = useNavigate();

  return (
    <StyledRoot>
      <LoginText>
        {/* <p
          role="presentation"
          onClick={() => {
            navigate('/login');
          }}
        >
          로그인
        </p>
        <p
          role="presentation"
          onClick={() => {
            navigate('/join');
          }}
        >
          회원가입
        </p> */}
        <p
          role="presentation"
          onClick={() => {
            navigate('/login');
          }}
        >
          로그아웃
        </p>
      </LoginText>
      <Menu />
      <CommonProfile />
      <Result />
      <DetailText
        role="presentation"
        onClick={() => {
          navigate('/details');
        }}
      >
        항목 별 더 자세히 확인하기 →
      </DetailText>
      <CauseContent>
        <CauseText>
          <pre>김이화님의 </pre>
          <pre className="underline">신용점수 도출 예상 원인</pre>
          <pre>은</pre>
        </CauseText>
        <CauseMain>
          <ol>
            <li>현 직장 근무 기간이 상대적으로 짧습니다.</li>
            <li>현재 본인의 수입이 비교적 낮습니다.</li>
          </ol>
        </CauseMain>
        <CauseSubText>
          <p>입니다.</p>
        </CauseSubText>
      </CauseContent>
      <TipContent>
        <TipMain>
          <TipImg src={Tips} />
          <TipMainText>맞춤 신용점수 올리기 팁</TipMainText>
        </TipMain>
        <TipDetail>
          <ol className="first">
            <li>경력을 더 쌓아 보세요.</li>
          </ol>
        </TipDetail>
        <TipDetail>
          <ol className="second">
            <li>수입을 올릴 수 있는 방법을 찾으세요.</li>
          </ol>
        </TipDetail>
        {/* <TipExpect>
          <p className="black">상승 예상 점수</p>
          <p className="blue">802점</p>
        </TipExpect> */}
      </TipContent>
    </StyledRoot>
  );
}

export default Report;

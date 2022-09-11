/* eslint-disable import/no-unresolved */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, Result } from 'components';
import { Profile, Tips } from 'assets';
import {
  StyledRoot,
  LoginText,
  ProfileBox,
  ProfileText,
  ProfileImg,
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
  TipExpect,
} from './style';

function Report() {
  const navigate = useNavigate();

  return (
    <StyledRoot>
      <LoginText>
        <p
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
        </p>
      </LoginText>
      <Menu />
      <ProfileBox>
        <ProfileText>
          <p className="small">안녕하세요</p>
          <p className="regular">김이화 님</p>
        </ProfileText>
        <ProfileImg src={Profile} alt="프로필 이미지" />
      </ProfileBox>
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
          <pre className="underline">신용점수 하락 원인</pre>
          <pre>은</pre>
        </CauseText>
        <CauseMain>
          <ol>
            <li>최근 6개월 간 문의 건수 많음</li>
            <li>연체되지 않은 거래의 비율 낮음</li>
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
            <li>문의 횟수를 줄이세요.</li>
          </ol>
        </TipDetail>
        <TipDetail>
          <ol className="second">
            <li>통장에 여유 잔고를 확보해두세요.</li>
          </ol>
        </TipDetail>
        <TipExpect>
          <p className="black">상승 예상 점수</p>
          <p className="blue">802점</p>
        </TipExpect>
      </TipContent>
    </StyledRoot>
  );
}

export default Report;

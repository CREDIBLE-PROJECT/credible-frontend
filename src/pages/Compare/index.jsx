/* eslint-disable import/no-unresolved */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, CommonProfile } from 'components';
import {
  StyledRoot,
  LoginText,
  CompareMainBox,
  CompareMainText,
  CompareBox,
  CompareMain,
  MyScoreBox,
  MyScoreText,
  MyScore,
  MeanScoreBox,
  MeanScoreText,
  MeanScore,
  MainMajorCompare,
  MajorCompareText,
  MajorCompareBox,
} from './style';

function Compare() {
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
      <CompareMainBox>
        <CompareMainText>
          김사보님과 연령대가 비슷한 이용자들과 신용점수 비교
        </CompareMainText>
        <CompareBox>
          <CompareMain>
            <MyScoreBox>
              <MyScoreText>김사보님의 신용점수</MyScoreText>
              <MyScore>866점</MyScore>
            </MyScoreBox>
            <MeanScoreBox>
              <MeanScoreText>20대 여성 중 당신의 신용점수</MeanScoreText>
              <MeanScore>상위 47%</MeanScore>
            </MeanScoreBox>
          </CompareMain>
        </CompareBox>
      </CompareMainBox>
      <MainMajorCompare>
        <MajorCompareText>나의 주요 비교항목</MajorCompareText>
        <MajorCompareBox>
          <p className="main">1. 현 직장 근무 기간이 상대적으로 짧습니다. </p>
          <ol>
            <li>✔ 나의 근무기간은 현재 0개월 이에요</li>
            <li>✔ 나와 같은 20대 여성들의 평균 근무기간은 44.6개월 이에요</li>
          </ol>
          <p className="main">2. 현재 본인의 수입이 비교적 낮습니다. </p>
          <ol>
            <li>✔ 현재 나의 월 평균 수입은 265만원 이에요.</li>
            <li>✔ 나와 같은 20대 여성들의 월 평균 수입은 435만원 이에요.</li>
          </ol>
        </MajorCompareBox>
      </MainMajorCompare>
    </StyledRoot>
  );
}

export default Compare;

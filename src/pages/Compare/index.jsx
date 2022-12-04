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
              <MyScoreText>김이화님의 신용점수</MyScoreText>
              <MyScore>753점</MyScore>
            </MyScoreBox>
            <MeanScoreBox>
              <MeanScoreText>20대 여성 중 당신의 신용점수</MeanScoreText>
              <MeanScore>상위 47%</MeanScore>
            </MeanScoreBox>
          </CompareMain>
          {/* <CompareResult>
            김이화님은 20대 여성 중 상위 10%에 속해있습니다.
          </CompareResult> */}
        </CompareBox>
      </CompareMainBox>
      {/* <MainMajorCompare>
        <MajorCompareText>나의 주요 비교항목</MajorCompareText>
        <MajorCompareBox>
          <p className="main">1. 최근 6개월간 문의 건수 많음 </p>
          <ol>
            <li>✔ 나의 최근 6개월간 문의 건수 비율은 70.1%예요</li>
            <li>✔ 나와 같은 20대 여성들의 평균 비율은 10.5%예요</li>
          </ol>
          <p className="sub">→ 상세 설명 보러가기</p>
          <p className="main">2. 연체되지 않은 거래의 비율 낮음 </p>
          <ol>
            <li>✔ 나의 연체되지 않은 거래의 비율은 65.0%예요</li>
            <li>✔ 나와 같은 20대 여성들의 평균 비율은 94.2%예요</li>
          </ol>
          <p className="sub">→ 상세 설명 보러가기</p>
        </MajorCompareBox>
      </MainMajorCompare> */}
    </StyledRoot>
  );
}

export default Compare;

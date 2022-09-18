/* eslint-disable import/no-unresolved */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu } from 'components';
import { Profile } from 'assets';
import {
  StyledRoot,
  LoginText,
  ProfileBox,
  ProfileText,
  ProfileImg,
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
  CompareResult,
  MainMajorCompare,
  MajorCompareText,
  MajorCompareBox,
} from './style';

function Compare() {
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

      <CompareMainBox>
        <CompareMainText>
          김이화님과 같은 20대 여성들의 평균 신용점수는?
        </CompareMainText>
        <CompareBox>
          <CompareMain>
            <MyScoreBox>
              <MyScoreText>김이화님의 신용점수</MyScoreText>
              <MyScore>643점</MyScore>
            </MyScoreBox>
            <MeanScoreBox>
              <MeanScoreText>20대 여성의 평균 신용점수</MeanScoreText>
              <MeanScore>738점</MeanScore>
            </MeanScoreBox>
          </CompareMain>
          <CompareResult>
            김이화님은 20대 여성 중 상위 10%에 속해있습니다.
          </CompareResult>
        </CompareBox>
      </CompareMainBox>
      <MainMajorCompare>
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
      </MainMajorCompare>
    </StyledRoot>
  );
}

export default Compare;

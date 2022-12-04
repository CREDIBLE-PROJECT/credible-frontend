/* eslint-disable import/no-unresolved */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MainImage } from 'assets';
import { Menu } from 'components';
import { StyledRoot, LoginText, MainImg, ImgText } from './style';

function Main() {
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
      <MainImg src={MainImage} alt="메인이미지" />
      <ImgText>
        <p>신뢰할 수 있는</p>
        <p>신용점수 분석 서비스 CREDIBLE</p>
      </ImgText>
    </StyledRoot>
  );
}

export default Main;

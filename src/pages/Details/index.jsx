/* eslint-disable import/no-unresolved */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, Result, CommonProfile } from 'components';
import { StyledRoot, LoginText, DetailText } from './style';

function Details() {
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
      <DetailText>알고 싶은 항목을 클릭해주세요</DetailText>
      {/* <DefaultText>&gt;&gt; 알고싶은 항목을 클릭해 주세요.</DefaultText> */}
    </StyledRoot>
  );
}

export default Details;

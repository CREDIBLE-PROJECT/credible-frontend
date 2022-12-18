/* eslint-disable import/no-unresolved */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginLogo } from 'assets';
import {
  StyledRoot,
  MainBox,
  Text,
  LoginBox,
  LoginForm,
  LoginButton,
} from './style';

function Login() {
  const navigate = useNavigate();

  return (
    <StyledRoot>
      <MainBox>
        <img src={LoginLogo} alt="로고" />
        <Text>
          <p>반갑습니다.</p>
          <p>신뢰할 수 있는 신용점수 분석 서비스 </p>
          <p>CREDIBLE입니다.</p>
        </Text>
      </MainBox>
      <LoginBox>
        <LoginForm>
          <input type="id" id="id" placeholder="아이디" />
        </LoginForm>
        <LoginForm>
          <input type="password" id="passwd" placeholder="비밀번호" />
        </LoginForm>
      </LoginBox>
      <LoginButton
        onClick={() => {
          navigate('/');
        }}
      >
        로그인
      </LoginButton>
    </StyledRoot>
  );
}

export default Login;

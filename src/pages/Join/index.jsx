/* eslint-disable import/no-unresolved */
import React from 'react';
import { Menu } from 'components';
import { useNavigate } from 'react-router-dom';
import { LoginLogo } from 'assets';
import {
  StyledRoot,
  TopNavi,
  MainBox,
  Text,
  JoinForm,
  BirthBox,
  SelectBox,
  JoinButton,
} from './style';

function Join() {
  const navigate = useNavigate();
  return (
    <StyledRoot>
      <TopNavi>
        {' '}
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
      </TopNavi>
      <Menu />

      <MainBox>
        <img src={LoginLogo} alt="로고" />

        <Text>
          <p> 아래 항목을 입력하세요. </p>
        </Text>

        <JoinForm>
          <input type="id" id="id" placeholder="아이디" />
        </JoinForm>
        <JoinForm>
          <input type="password" id="password" placeholder="비밀번호" />
        </JoinForm>
        <JoinForm>
          <input
            type="passwordcheck"
            id="password"
            placeholder="비밀번호 재확인"
          />
        </JoinForm>

        <JoinForm>
          <input type="name" id="name" placeholder="이름" />
        </JoinForm>

        <SelectBox>
          <option selected disabled>
            성별
          </option>
          <option>여자</option>
          <option>남자</option>
        </SelectBox>
        <Text>
          <p> 생년월일 </p>
        </Text>

        <BirthBox>
          <input type="year" id="year" placeholder="년(4자)" />
          <input type="monthselect" id="monthselect" placeholder="월(2자)" />
          <input type="day" id="day" placeholder="일(2자)" />
        </BirthBox>

        <JoinForm>
          <input
            type="email"
            id="email"
            placeholder="이메일을 입력하세요(선택)"
          />
        </JoinForm>

        <JoinButton
          onClick={() => {
            navigate('/login');
          }}
        >
          {' '}
          회원가입
        </JoinButton>
      </MainBox>
    </StyledRoot>
  );
}

export default Join;

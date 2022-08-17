/* eslint-disable import/no-unresolved */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MainLogo } from 'assets';
import { StyledRoot, MenuText } from './style';

function Menu() {
  const navigate = useNavigate();

  return (
    <StyledRoot>
      <img
        src={MainLogo}
        alt="로고 이미지"
        role="presentation"
        onClick={() => {
          navigate('/');
        }}
      />
      <MenuText>
        <p
          role="presentation"
          onClick={() => {
            navigate('/report');
          }}
        >
          내 신용정보 확인하기
        </p>
        <p
          role="presentation"
          onClick={() => {
            navigate('/details');
          }}
        >
          항목별 정보 확인하기
        </p>
        <p
          role="presentation"
          onClick={() => {
            navigate('/compare');
          }}
        >
          비교분석
        </p>
      </MenuText>
    </StyledRoot>
  );
}

export default Menu;

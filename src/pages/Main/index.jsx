/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainImage } from 'assets';
import { Menu, Loading } from 'components';
import {
  StyledRoot,
  TopBar,
  ModalButton,
  ModalBackdrop,
  ModalView,
  CloseButton,
  LoginText,
  MainImg,
  ImgText,
} from './style';

function Main() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  });

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <StyledRoot>
      {modal ? (
        <ModalBackdrop onClick={toggleModal}>
          {loading ? <Loading /> : null}
          <ModalView onClick={toggleModal}>
            <p>신용정보를 불러왔습니다.</p>
            <CloseButton onClick={toggleModal}>확인</CloseButton>
          </ModalView>
        </ModalBackdrop>
      ) : null}
      <TopBar>
        <ModalButton onClick={toggleModal}>
          {modal ? '' : '내 신용정보 불러오기'}
        </ModalButton>
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
      </TopBar>

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

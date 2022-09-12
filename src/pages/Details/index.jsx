/* eslint-disable import/no-unresolved */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, Result } from 'components';
import { Profile } from 'assets';
import moment from 'moment';
import {
  StyledRoot,
  LoginText,
  ProfileBox,
  ProfileText,
  ProfileImg,
  DetailText,
  DetailContent,
  DetailTitle,
  DetailBox,
  DetailBoxF,
  DetailBoxS,
  DetailBoxT,
} from './style';

function Details() {
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
      <DetailText>알고 싶은 항목을 클릭해주세요</DetailText>
      <DetailContent>
        <DetailTitle>
          <p className="main">마지막 거래 이후 경과된 개월 수</p>
          <p className="sub">* 최근 3개월 이내 정보만 제공됩니다.</p>
        </DetailTitle>
        <DetailBox>
          <DetailBoxF>
            <p>{moment().format('YYYY.MM.DD')} 기준 3개월 이전 내역</p>
            <ol>
              <li>거래 건수 : 1건</li>
            </ol>
          </DetailBoxF>
          <DetailBoxS>
            <p>{moment().format('YYYY.MM.DD')} 기준 2개월 이전 내역</p>
            <ol>
              <li>거래 건수 : 0건</li>
            </ol>
          </DetailBoxS>
          <DetailBoxT>
            <p>{moment().format('YYYY.MM.DD')} 기준 1개월 이전 내역</p>
            <ol>
              <li>거래 건수 : 0건</li>
            </ol>
          </DetailBoxT>
        </DetailBox>
      </DetailContent>
    </StyledRoot>
  );
}

export default Details;

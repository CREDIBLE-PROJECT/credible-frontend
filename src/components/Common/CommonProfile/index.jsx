/* eslint-disable import/no-unresolved */
import React from 'react';
import { Profile } from 'assets';
import { StyledRoot, ProfileBox, ProfileText, ProfileImg } from './style';

function CommonProfile() {
  return (
    <StyledRoot>
      <ProfileBox>
        <ProfileText>
          <p className="small">안녕하세요</p>
          <p className="regular">김사보 님</p>
        </ProfileText>
        <ProfileImg src={Profile} alt="프로필 이미지" />
      </ProfileBox>
    </StyledRoot>
  );
}

export default CommonProfile;

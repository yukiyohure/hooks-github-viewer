import React, { useEffect } from "react";
import styled from "styled-components";
import { colors } from "../variables";
import PropTypes from "prop-types";

const ProfileContainer = styled.div`
  display: flex;
  margin: 2rem 0;
  border-radius: 6px;
  border: 1px solid ${colors.border};
`;

const ProfilePicture = styled.div`
  padding: 1rem;
  width: 50%;
`;

const ProfileInformation = styled.div`
  padding: 1rem;
  width: 50%;
`;

const Label = styled.label`
  color: ${colors.weak};
`;

const ProfileItem = styled.p`
  padding: 1rem 0;
  font-size: 1.2rem;
  img {
    max-width: 70%;
    max-height: 70%;
  }
`;

const ProfileWrapper = styled.div`
  padding: 1rem;
`;

const Profile = ({ user, requestUser }) => {
  useEffect(() => {
    requestUser();
  }, [requestUser]);

  const userData = user.data;

  // Profileページでリロードされるとpromiseから返ってくるのを待たずにundifinedから値を参照しようとしてundifined→エラーになる
  // そのため存在チェックを先に行っておく
  if (!userData) {
    // 実務ではこのフラグメントの部分にローダーやプレースホルダーを入れたりする
    return <></>;
  }

  return (
    <ProfileWrapper>
      <h1>Profile</h1>
      <ProfileContainer>
        <ProfilePicture>
          <Label>プロフィール</Label>
          <ProfileItem>
            <img src={userData.avatar_url} alt="profile" />
          </ProfileItem>
        </ProfilePicture>
        <ProfileInformation>
          <div>
            <Label>ユーザー名</Label>
            <ProfileItem>{userData.name}</ProfileItem>
          </div>
          <div>
            <Label>アカウントURL</Label>
            <ProfileItem>
              <a target="_blank" rel="noreferrer" href={userData.html_url}>
                {userData.html_url}
              </a>
            </ProfileItem>
          </div>
          <div>
            <Label>フォロー数</Label>
            <ProfileItem>{userData.following}</ProfileItem>
          </div>
          <div>
            <Label>フォロワー数</Label>
            <ProfileItem>{userData.followers}</ProfileItem>
          </div>
          <div>
            <Label>パブリックレポジトリ数</Label>
            <ProfileItem>{userData.public_repos}</ProfileItem>
          </div>
          <div>
            <Label>プライベートリポジトリ数</Label>
            <ProfileItem>{userData.owned_private_repos}</ProfileItem>
          </div>
        </ProfileInformation>
      </ProfileContainer>
    </ProfileWrapper>
  );
};

Profile.propTypes = {
  user: PropTypes.object,
};

export default Profile;

import {
  Avatar,
  Footer,
  LinkContainer,
  ProfileContainer,
  ProfileContent,
  ProfileInfo,
} from "./styles";

import ArrowUpIcon from "../../../../assets/arrow-up-right-icon.svg";
import GithubIcon from "../../../../assets/github-icon.svg";
import BuildingIcon from "../../../../assets/building-icon.svg";
import UserIcon from "../../../../assets/user-icon.svg";
import { useEffect, useState } from "react";
import { GITHUB_USER, api } from "../../../../api/github";

interface User {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name: string;
  company: string;
  bio: string;
  followers: number;
  following: number;
}

export const Profile: React.FC = () => {
  const [user, setUser] = useState<User>();

  async function getUser() {
    const response = await api.get(`/users/${GITHUB_USER}`);
    setUser(response.data);
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <ProfileContainer>
      <ProfileContent>
        <Avatar src={user?.avatar_url} alt="" />

        <ProfileInfo>
          <header>
            <h2>{user?.name}</h2>

            <LinkContainer
              href={`https://github.com/${user?.login}`}
              target="_blank"
            >
              <span>Github</span>
              <img src={ArrowUpIcon} alt="" />
            </LinkContainer>
          </header>

          <p>{user?.bio}</p>

          <Footer>
            <div>
              <img src={GithubIcon} alt="" />
              <span>{user?.login}</span>
            </div>
            <div>
              <img src={BuildingIcon} alt="" />
              <span>{user?.company}</span>
            </div>
            <div>
              <img src={UserIcon} alt="" />
              <span>{user?.followers} seguidores</span>
            </div>
          </Footer>
        </ProfileInfo>
      </ProfileContent>
    </ProfileContainer>
  );
};

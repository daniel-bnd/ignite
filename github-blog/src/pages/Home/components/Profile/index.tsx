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

export const Profile: React.FC = () => {
  return (
    <ProfileContainer>
      <ProfileContent>
        <Avatar src={`https://github.com/daniel-bnd.png`} alt="" />

        <ProfileInfo>
          <header>
            <h2>Daniel Bernardes</h2>

            <LinkContainer
              href={`https://github.com/daniel-bnd.png`}
              target="_blank"
            >
              <span>Github</span>
              <img src={ArrowUpIcon} alt="" />
            </LinkContainer>
          </header>

          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>

          <Footer>
            <div>
              <img src={GithubIcon} alt="" />
              <span>daniel-bnd</span>
            </div>
            <div>
              <img src={BuildingIcon} alt="" />
              <span>Empresa</span>
            </div>
            <div>
              <img src={UserIcon} alt="" />
              <span>32 seguidores</span>
            </div>
          </Footer>
        </ProfileInfo>
      </ProfileContent>
    </ProfileContainer>
  );
};

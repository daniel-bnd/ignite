import { Elipse, HeaderContainer, Logo, Retangle } from "./styles";

import RightHeaderEffect from "../../assets/right-header-effect.svg";
import LeftHeaderEffect from "../../assets/left-header-effect.svg";
import LogoSvg from "../../assets/logo.svg";

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <img src={RightHeaderEffect} alt="" />
      <Logo src={LogoSvg} alt="" />
      <img src={LeftHeaderEffect} alt="" />

      <Elipse position="left" />
      <Elipse position="right" />
      <Retangle />
    </HeaderContainer>
  );
};

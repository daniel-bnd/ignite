import { css, styled } from "styled-components";

export const HeaderContainer = styled.header`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding: 30px 0;
  background-color: ${props => props.theme.base.profile};

  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.img`
  margin-top: 31px;
  height: fit-content;
`;

interface ElipseProps {
  position: "right" | "left";
}

export const Elipse = styled.div<ElipseProps>`
  position: absolute;
  top: -96px;

  width: 236px;
  height: 236px;
  background: #14589c;
  filter: blur(200px);

  ${props =>
    props.position === "left" &&
    css`
      left: -130px;
    `}

  ${props =>
    props.position === "right" &&
    css`
      right: -130px;
    `}
`;

export const Retangle = styled.div`
  position: absolute;
  bottom: 9px;
  left: 50%;
  transform: translateX(-50%);
  width: 891px;
  height: 52px;
  background: #14589c;
  filter: blur(106px);
`;

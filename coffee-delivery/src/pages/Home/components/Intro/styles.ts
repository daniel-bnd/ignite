import styled, { css } from "styled-components";
import backgroundImg from "../../../../assets/background.svg";
import { rgba } from "polished";

export const IntroContainer = styled.div`
  width: 100%;
  height: 34rem;
  background: ${({ theme }) => `url(${backgroundImg}) no-repeat center,
    linear-gradient(
      0deg,
      ${theme.colors.base.white} 0%,
      ${rgba(theme.colors.base.background, 0.2)} 50%,
      ${theme.colors.base.background} 100%
    )`};
  background-size: cover;
`;

export const IntroContent = styled.div`
  padding: 5.75rem 0;
  display: flex;
  gap: 3.5rem;
`;

export const LeftGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.125rem;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font: ${props => props.theme.fonts.title.xl};
    color: ${props => props.theme.colors.base.title};
  }
  h2 {
    font: ${props => props.theme.fonts.regular.l};
    color: ${props => props.theme.colors.base.subtitle};
  }
`;

export const ItemsGrid = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2.5rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
`;

export const Items = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    white-space: nowrap;
  }
`;

interface IconBackgroundProps {
  bg: "yellowDark" | "yellow" | "gray" | "purple";
}

export const IconBackground = styled.div<IconBackgroundProps>`
  width: 32px;
  height: 32px;
  padding: 8px;
  border-radius: 50%;
  color: ${props => props.theme.colors.base.background};

  ${props =>
    props.bg === "yellowDark" &&
    css`
      background: ${props.theme.colors.brand.yellowDark};
    `}

  ${props =>
    props.bg === "yellow" &&
    css`
      background: ${props.theme.colors.brand.yellowDark};
    `}

  ${props =>
    props.bg === "gray" &&
    css`
      background: ${props.theme.colors.base.text};
    `}

  ${props =>
    props.bg === "purple" &&
    css`
      background: ${props.theme.colors.brand.purple};
    `}
`;

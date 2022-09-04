import styled, { css } from "styled-components";
import backgroundImg from "../../../../assets/background.svg";

export const IntroContainer = styled.div`
  width: 100%;
  background: url(${backgroundImg});
`;

export const IntroContent = styled.div`
  padding: 5.75rem 10rem;
  display: flex;
  gap: 3.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2.5rem;
  grid-row-gap: 1.25rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Items = styled.div`
  width: 50%;
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

import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const PostHeaderContainer = styled.section`
  background-color: ${props => props.theme.base.profile};
  padding: 2rem 2.5rem;
  border-radius: 10px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

  margin-top: -5.5rem;
`;

export const PostHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 130%;
    color: ${props => props.theme.base.title};
    margin-top: 0.75rem;
  }

  p {
    line-height: 160%;
  }
`;

export const LinkContainer = styled(Link)`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  color: ${props => props.theme.blue};
  text-decoration: none;
  border-bottom: 1px solid transparent;

  &:hover {
    transition: border-color 0.25s;
    border-color: ${props => props.theme.blue};
  }

  span {
    font-size: 0.75rem;
    font-weight: bold;
    text-transform: uppercase;
  }
`;

export const Footer = styled.footer`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
      text-transform: lowercase;
    }
  }
`;

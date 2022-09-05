import styled from "styled-components";

export const HomeContainer = styled.main`
  padding-top: 2.125rem;

  h2 {
    font: ${props => props.theme.fonts.title.l};
    color: ${props => props.theme.colors.base.subtitle};

    margin-bottom: 2rem;
  }
`;

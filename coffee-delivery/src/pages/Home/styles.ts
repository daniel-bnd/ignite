import styled from "styled-components";

export const HomeContainer = styled.main`
  padding-top: 2.125rem;
  padding-bottom: 9.5rem;

  h2 {
    font: ${props => props.theme.fonts.title.l};
    color: ${props => props.theme.colors.base.subtitle};

    margin-bottom: 2rem;
  }
`;

export const CoffeeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 40px;
`;

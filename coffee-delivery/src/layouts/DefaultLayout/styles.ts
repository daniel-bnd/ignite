import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;

  background: ${props => props.theme.colors.base.background};

  .container {
    width: 100%;
    max-width: 70rem;
    margin-right: auto;
    margin-left: auto;
  }
`;

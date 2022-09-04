import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10rem;

  div {
    display: flex;
    gap: 0.75rem;
  }
`;

const HeaderButton = styled.button`
  display: inline-flex;
  align-items: center;
  border: none;
  padding: 8px;
  border-radius: 6px;
`;

export const LocationButton = styled(HeaderButton)`
  gap: 4px;
  background: ${props => props.theme.colors.brand.purpleLight};
  color: ${props => props.theme.colors.brand.purpleDark};

  svg {
    color: ${props => props.theme.colors.brand.purple};
  }

  transition: opacity 0.3s;

  :hover {
    cursor: pointer;
    filter: brightness(0.98);
  }
`;

export const CartButton = styled(HeaderButton)`
  background: ${props => props.theme.colors.brand.yellowLight};
  color: ${props => props.theme.colors.brand.yellowDark};

  transition: opacity 0.3s;

  :hover {
    cursor: pointer;
    filter: brightness(0.98);
  }
`;

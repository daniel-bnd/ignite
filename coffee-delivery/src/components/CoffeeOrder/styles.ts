import styled from "styled-components";

export const CoffeeOrderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.25rem;
`;

export const CoffeeContainer = styled.div`
  display: flex;
  gap: 20px;
  max-width: 255px;

  img {
    max-width: 64px;
    max-height: 64px;
  }
`;

export const Coffee = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  p {
    font: ${props => props.theme.fonts.regular.m};
    color: ${props => props.theme.colors.base.subtitle};
  }

  div {
    display: flex;
    gap: 8px;
  }
`;

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  padding: 6.5px 8px;
  border-radius: 6px;
  gap: 4px;
  background: ${props => props.theme.colors.base.button};

  svg {
    color: ${props => props.theme.colors.brand.purple};
  }

  span {
    font: ${props => props.theme.fonts.components.buttonS};
    text-transform: uppercase;
  }
`;

export const Price = styled.p`
  font: ${props => props.theme.fonts.bold.m};
`;

export const Divider = styled.div`
  margin: 24px 0;
  height: 1px;
  width: 100%;
  background: ${props => props.theme.colors.base.button};
`;

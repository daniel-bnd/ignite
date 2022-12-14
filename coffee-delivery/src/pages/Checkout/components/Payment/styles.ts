import styled, { css } from "styled-components";

export const PaymentContainer = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  gap: 32px;
  background: ${props => props.theme.colors.base.card};
`;

export const HeaderContainer = styled.header`
  display: flex;
  align-items: flex-start;
  gap: 8px;

  svg {
    color: ${props => props.theme.colors.brand.purple};
  }

  .title {
    color: ${props => props.theme.colors.base.subtitle};
  }

  .subtitle {
    font: ${props => props.theme.fonts.regular.s};
  }
`;

export const PaymentTypeContainer = styled.div`
  display: flex;
  gap: 12px;
`;

interface PaymentButtonProps {
  isActive: boolean;
}

export const PaymentButton = styled.button<PaymentButtonProps>`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 17.5px 16px;
  gap: 12px;
  border-radius: 6px;
  background: ${props => props.theme.colors.base.button};
  border: 1px solid transparent;
  transition: background-color 0.2s, border-color 0.2s, filter 0.2s;

  :hover {
    background: ${props => props.theme.colors.brand.purpleLight};
    border-color: ${props => props.theme.colors.brand.purple};
    filter: brightness(0.9);
  }

  span {
    font: ${props => props.theme.fonts.components.buttonS};
    color: ${props => props.theme.colors.base.text};
    text-transform: uppercase;
  }

  svg {
    color: ${props => props.theme.colors.brand.purple};
  }

  :focus {
    outline: 0;
    box-shadow: none;
  }

  ${props =>
    props.isActive &&
    css`
      background: ${props => props.theme.colors.brand.purpleLight};
      border-color: ${props => props.theme.colors.brand.purple};
    `}
`;

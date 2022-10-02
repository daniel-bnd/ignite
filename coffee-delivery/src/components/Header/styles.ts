import styled from "styled-components";

import * as Dialog from "@radix-ui/react-dialog";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;

  div {
    display: flex;
    gap: 12px;
  }
`;

const HeaderButton = styled.button`
  display: inline-flex;
  align-items: center;
  border: none;
  padding: 8px;
  border-radius: 6px;
`;

export const CartButton = styled(HeaderButton)`
  position: relative;
  background: ${props => props.theme.colors.brand.yellowLight};
  color: ${props => props.theme.colors.brand.yellowDark};

  transition: opacity 0.3s;

  :hover {
    cursor: pointer;
    filter: brightness(0.98);
  }
`;

export const NumberOfCoffes = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  width: 20px;
  height: 20px;
  padding: 2px 0;
  background: ${props => props.theme.colors.brand.yellowDark};
  border-radius: 50%;
  color: ${props => props.theme.colors.base.white};
  font: ${props => props.theme.fonts.bold.s};

  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
`;

export const LocationButton = styled(Dialog.Trigger)`
  display: inline-flex;
  align-items: center;
  border: none;
  padding: 8px;
  border-radius: 6px;
  gap: 4px;
  background: ${props => props.theme.colors.brand.purpleLight};
  color: ${props => props.theme.colors.brand.purpleDark};

  svg {
    color: ${props => props.theme.colors.brand.purple};
  }

  span {
    padding-top: 3px;
  }

  transition: opacity 0.3s;

  :hover {
    cursor: pointer;
    filter: brightness(0.98);
  }
`;

export const DialogOverlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
`;

export const DialogContent = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem 2rem;
  background: ${props => props.theme.colors.base.card};
  border-radius: 6px;

  :focus {
    outline: 0;
    box-shadow: none;
  }

  .title {
    font: ${props => props.theme.fonts.title.s};
    margin-bottom: 8px;
  }

  .input {
    :focus {
      outline: 0;
      box-shadow: none;
    }
  }

  .flex-center {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .cep-button {
    border: 2px solid ${props => props.theme.colors.brand.purple};
    border-radius: 6px;
    padding: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.colors.brand.purpleDark};
    transition: background-color 0.2s, filter 0.2s;

    :hover {
      background: ${props => props.theme.colors.brand.purpleLight};
      filter: brightness(0.9);
    }

    :focus {
      outline: 0;
      box-shadow: none;
    }
  }
`;

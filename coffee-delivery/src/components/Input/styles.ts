import styled, { css } from "styled-components";

interface InputContainer {
  variant: "small" | "medium" | "large";
}

export const InputContainer = styled.input<InputContainer>`
  height: 42px;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.colors.base.button};
  background: ${props => props.theme.colors.base.input};
  color: ${props => props.theme.colors.base.text};
  font: ${props => props.theme.fonts.regular.s};

  ::placeholder {
    color: ${props => props.theme.colors.base.label};
  }

  ${props =>
    props.variant === "small" &&
    css`
      width: 60px;
    `}

  ${props =>
    props.variant === "medium" &&
    css`
      width: 200px;
    `}

  ${props =>
    props.variant === "large" &&
    css`
      flex: 1;
    `}
`;

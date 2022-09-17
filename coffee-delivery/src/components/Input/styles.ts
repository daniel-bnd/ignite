import styled, { css } from "styled-components";

interface InputContainer {
  variant: "small" | "medium" | "large";
  hasError?: boolean;
}

export const InputContainer = styled.input<InputContainer>`
  height: 42px;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.colors.base.button};
  background: ${props => props.theme.colors.base.input};
  color: #18181b;
  font: ${props => props.theme.fonts.regular.s};

  ::placeholder {
    color: #71717a;
  }

  :disabled {
    color: #a1a1aa;
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

  ${props =>
    props.hasError &&
    css`
      border-color: #ef4444;
    `}
`;

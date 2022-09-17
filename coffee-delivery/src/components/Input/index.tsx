import { InputHTMLAttributes } from "react";
import { InputContainer } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant: "small" | "medium" | "large";
  hasError?: boolean;
}

export function Input({ variant, hasError, ...rest }: InputProps) {
  return <InputContainer variant={variant} hasError={hasError} {...rest} />;
}

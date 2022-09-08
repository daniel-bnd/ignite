import { InputHTMLAttributes } from "react";
import { InputContainer } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant: "small" | "medium" | "large";
}

export function Input({ variant, ...rest }: InputProps) {
  return <InputContainer variant={variant} {...rest} />;
}

import { Minus, Plus } from "phosphor-react";
import { IconWrapper, QuantityInputContainer } from "./styles";

interface QuantityInputProps {
  coffeeQtd: number;
  incrementCoffeeQtd: () => void;
  decrementCoffeeQtd: () => void;
}

export function QuantityInput({
  coffeeQtd,
  incrementCoffeeQtd,
  decrementCoffeeQtd,
}: QuantityInputProps) {
  return (
    <QuantityInputContainer>
      <IconWrapper onClick={decrementCoffeeQtd} disabled={coffeeQtd <= 1}>
        <Minus size={14} weight="fill" />
      </IconWrapper>
      <input type="number" readOnly value={coffeeQtd} />
      <IconWrapper onClick={incrementCoffeeQtd} disabled={coffeeQtd >= 9}>
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </QuantityInputContainer>
  );
}

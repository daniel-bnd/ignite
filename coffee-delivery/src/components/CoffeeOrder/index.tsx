import { CheckoutContext } from "@/contexts/CheckoutContext";
import { Coffee as CoffeeProps } from "@/reducers/cartReducer/reducer";
import { Trash } from "phosphor-react";
import { useContext } from "react";
import { QuantityInput } from "../QuantityInput";
import {
  Coffee,
  CoffeeContainer,
  CoffeeOrderContainer,
  Divider,
  Price,
  RemoveButton,
} from "./styles";

interface CoffeeOrderProps {
  coffee: CoffeeProps;
}

export function CoffeeOrder({ coffee }: CoffeeOrderProps) {
  const { removeCoffeeFromCart, incrementCoffeeQtd, decrementCoffeeQtd } =
    useContext(CheckoutContext);

  function handleRemoveCoffeeFromCart() {
    removeCoffeeFromCart(coffee.id);
  }

  function handleIncrementCoffeeQtd() {
    incrementCoffeeQtd(coffee.id);
  }

  function handleDecrementCoffeeQtd() {
    decrementCoffeeQtd(coffee.id);
  }

  return (
    <>
      <CoffeeOrderContainer>
        <CoffeeContainer>
          <img src={`/coffees/${coffee.photo}`} alt="" />
          <Coffee>
            <p>{coffee.name}</p>
            <div>
              <QuantityInput
                coffeeQtd={coffee.qtd}
                incrementCoffeeQtd={handleIncrementCoffeeQtd}
                decrementCoffeeQtd={handleDecrementCoffeeQtd}
              />
              <RemoveButton onClick={handleRemoveCoffeeFromCart}>
                <Trash size={16} />
                <span>Remover</span>
              </RemoveButton>
            </div>
          </Coffee>
        </CoffeeContainer>
        <Price>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 2,
          }).format(coffee.price * coffee.qtd)}
        </Price>
      </CoffeeOrderContainer>
      <Divider />
    </>
  );
}

import { Trash } from "phosphor-react";
import { QuantityInput } from "../QuantityInput";
import {
  Coffee,
  CoffeeContainer,
  CoffeeOrderContainer,
  Divider,
  Price,
  RemoveButton,
} from "./styles";

export function CoffeeOrder() {
  return (
    <>
      <CoffeeOrderContainer>
        <CoffeeContainer>
          <img src="/coffees/americano.png" alt="" />
          <Coffee>
            <p>Expresso Tradicional</p>
            <div>
              <QuantityInput />
              <RemoveButton>
                <Trash size={16} />
                <span>Remover</span>
              </RemoveButton>
            </div>
          </Coffee>
        </CoffeeContainer>
        <Price>R$ 9,90</Price>
      </CoffeeOrderContainer>
      <Divider />
    </>
  );
}

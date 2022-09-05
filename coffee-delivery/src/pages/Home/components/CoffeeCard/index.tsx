import traditionalExpress from "@/assets/coffee/traditional-express.svg";
import { QuantityInput } from "@/components/QuantityInput";
import { ShoppingCart } from "phosphor-react";
import {
  AddCartButton,
  CoffeeActions,
  CoffeeContainer,
  CoffeeFooter,
  CoffeeImg,
  CoffeePrice,
  CoffeeTag,
} from "./styles";

export function CoffeeCard() {
  return (
    <CoffeeContainer>
      <CoffeeImg src={traditionalExpress} alt="" />
      <CoffeeTag>Tradicional</CoffeeTag>
      <strong>Expresso Tradicional</strong>
      <p>O tradicional café feito com água quente e grãos moídos</p>

      <CoffeeFooter>
        <CoffeePrice>
          <span>R$</span>
          9,90
        </CoffeePrice>

        <CoffeeActions>
          <QuantityInput />

          <AddCartButton>
            <ShoppingCart size={22} weight="fill" />
          </AddCartButton>
        </CoffeeActions>
      </CoffeeFooter>
    </CoffeeContainer>
  );
}

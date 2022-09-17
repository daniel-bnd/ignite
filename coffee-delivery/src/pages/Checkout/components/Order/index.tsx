import { CoffeeOrder } from "@/components/CoffeeOrder";
import { CheckoutContext } from "@/contexts/CheckoutContext";
import { useContext } from "react";
import {
  ConfirmOrder,
  OrderContainer,
  Total,
  TotalContainer,
  Wrapper,
} from "./styles";

export function Order() {
  const { checkoutState } = useContext(CheckoutContext);
  const { cart } = checkoutState;

  let finalPrice = 0;

  cart?.forEach(coffee => {
    const price = coffee.price * coffee.qtd;
    finalPrice += price;
  });

  return (
    <OrderContainer>
      {cart?.map(coffee => (
        <CoffeeOrder key={coffee.id} coffee={coffee} />
      ))}

      <TotalContainer>
        <Wrapper>
          <span className="title">Total de itens</span>
          <span className="price">
            {Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
              minimumFractionDigits: 2,
            }).format(finalPrice)}
          </span>
        </Wrapper>
        <Wrapper>
          <span className="title">Entrega</span>
          <span className="price">R$ 3,50</span>
        </Wrapper>
        <Total>
          <span>Total</span>
          <span>
            {Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
              minimumFractionDigits: 2,
            }).format(finalPrice + 3.5)}
          </span>
        </Total>
      </TotalContainer>

      <ConfirmOrder>Confirmar Pedido</ConfirmOrder>
    </OrderContainer>
  );
}

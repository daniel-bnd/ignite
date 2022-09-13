import { CoffeeOrder } from "@/components/CoffeeOrder";
import { CartContext } from "@/contexts/CartContext";
import { useContext } from "react";
import {
  ConfirmOrder,
  OrderContainer,
  Total,
  TotalContainer,
  Wrapper,
} from "./styles";

export function Order() {
  const { cartState } = useContext(CartContext);

  let finalPrice = 0;

  cartState?.forEach(coffee => {
    const price = coffee.price * coffee.qtd;
    finalPrice += price;
  });

  return (
    <OrderContainer>
      {cartState?.map(coffee => (
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

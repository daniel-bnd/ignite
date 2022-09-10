import { CoffeeOrder } from "@/components/CoffeeOrder";
import {
  ConfirmOrder,
  OrderContainer,
  Total,
  TotalContainer,
  Wrapper,
} from "./styles";

export function Order() {
  return (
    <OrderContainer>
      <CoffeeOrder />
      <CoffeeOrder />

      <TotalContainer>
        <Wrapper>
          <span className="title">Total de itens</span>
          <span className="price">R$ 29,70</span>
        </Wrapper>
        <Wrapper>
          <span className="title">Entrega</span>
          <span className="price">R$ 3,50</span>
        </Wrapper>
        <Total>
          <span>Entrega</span>
          <span>R$ 3,50</span>
        </Total>
      </TotalContainer>

      <ConfirmOrder>Confirmar Pedido</ConfirmOrder>
    </OrderContainer>
  );
}

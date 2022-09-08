import { Address } from "./components/Address";
import { Payment } from "./components/Payment";
import {
  ConfirmOrder,
  CheckoutContainer,
  OrderContainer,
  Title,
} from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer className="container">
      <OrderContainer>
        <Title>Complete seu pedido</Title>
        <Address />
        <Payment />
      </OrderContainer>
      <ConfirmOrder>
        <Title>Cafés selecionados</Title>
      </ConfirmOrder>
    </CheckoutContainer>
  );
}

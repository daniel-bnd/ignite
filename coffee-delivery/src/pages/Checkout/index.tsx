import { Address } from "./components/Address";
import { Order } from "./components/Order";
import { Payment } from "./components/Payment";
import {
  OrderContainer,
  CheckoutContainer,
  AddressContainer,
  Title,
} from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer className="container">
      <AddressContainer>
        <Title>Complete seu pedido</Title>
        <Address />
        <Payment />
      </AddressContainer>
      <OrderContainer>
        <Title>Cafés selecionados</Title>
        <Order />
      </OrderContainer>
    </CheckoutContainer>
  );
}

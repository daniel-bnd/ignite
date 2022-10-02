import { CheckoutContext } from "@/contexts/CheckoutContext";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useContext } from "react";
import {
  Icon,
  OrderContainer,
  OrderContainerBorder,
  OrderInfo,
  OrderInfoContent,
  SuccessContainer,
  SuccessContent,
} from "./styles";

export function Success() {
  const { checkoutState } = useContext(CheckoutContext);

  const { address, payment } = checkoutState;

  return (
    <SuccessContainer className="container">
      <strong>Uhu! Pedido confirmado</strong>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <SuccessContent>
        <OrderContainerBorder>
          <OrderContainer>
            <OrderInfo>
              <Icon iconColor="purple">
                <MapPin size={16} weight="fill" />
              </Icon>
              <OrderInfoContent>
                <span>
                  Entrega em{" "}
                  <span className="bold">
                    {address.street}, {address.number}
                  </span>
                </span>
                <span>
                  {address.district} - {address.city}, {address.province}
                </span>
              </OrderInfoContent>
            </OrderInfo>
            <OrderInfo>
              <Icon iconColor="yellow">
                <Timer size={16} weight="fill" />
              </Icon>
              <OrderInfoContent>
                <span>Previsão de entrega</span>
                <span className="bold">20 min - 30 min</span>
              </OrderInfoContent>
            </OrderInfo>
            <OrderInfo>
              <Icon iconColor="yellowDark">
                <CurrencyDollar size={16} weight="fill" />
              </Icon>
              <OrderInfoContent>
                <span>Pagamento na entrega</span>
                <span className="bold">{payment}</span>
              </OrderInfoContent>
            </OrderInfo>
          </OrderContainer>
        </OrderContainerBorder>
        <img src="/motoboy.png" alt="" />
      </SuccessContent>
    </SuccessContainer>
  );
}

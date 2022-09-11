import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
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
                  <span className="bold">Rua João Daniel Martinelli, 102</span>
                </span>
                <span>Farrapos - Porto Alegre, RS</span>
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
                <span className="bold">Cartão de Crédito</span>
              </OrderInfoContent>
            </OrderInfo>
          </OrderContainer>
        </OrderContainerBorder>
        <img src="/motoboy.png" alt="" />
      </SuccessContent>
    </SuccessContainer>
  );
}

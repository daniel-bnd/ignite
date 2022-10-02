import { CheckoutContext } from "@/contexts/CheckoutContext";
import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { useContext } from "react";
import {
  HeaderContainer,
  PaymentButton,
  PaymentContainer,
  PaymentTypeContainer,
} from "./styles";

export function Payment() {
  const { checkoutState, setPayment } = useContext(CheckoutContext);
  const { payment } = checkoutState;

  return (
    <PaymentContainer>
      <HeaderContainer>
        <CurrencyDollar size={22} />
        <div>
          <p className="title">Pagamento</p>
          <p className="subtitle">
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </HeaderContainer>

      <PaymentTypeContainer>
        <PaymentButton
          onClick={() => setPayment("Cartão de Crétido")}
          isActive={payment === "Cartão de Crétido"}
        >
          <CreditCard size={16} />
          <span>Cartão de crédito</span>
        </PaymentButton>
        <PaymentButton
          onClick={() => setPayment("Cartão de Débito")}
          isActive={payment === "Cartão de Débito"}
        >
          <Bank size={16} />
          <span>Cartão de débito</span>
        </PaymentButton>
        <PaymentButton
          onClick={() => setPayment("Dinheiro")}
          isActive={payment === "Dinheiro"}
        >
          <Money size={16} />
          <span>Dinheiro</span>
        </PaymentButton>
      </PaymentTypeContainer>
    </PaymentContainer>
  );
}

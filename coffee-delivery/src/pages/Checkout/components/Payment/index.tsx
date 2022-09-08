import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import {
  HeaderContainer,
  PaymentContainer,
  PaymentTypeContainer,
} from "./styles";

export function Payment() {
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
        <button>
          <CreditCard size={16} />
          <span>Cartão de crédito</span>
        </button>
        <button>
          <Bank size={16} />
          <span>Cartão de débito</span>
        </button>
        <button>
          <Money size={16} />
          <span>Dinheiro</span>
        </button>
      </PaymentTypeContainer>
    </PaymentContainer>
  );
}

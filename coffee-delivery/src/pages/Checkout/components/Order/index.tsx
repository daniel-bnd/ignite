import { CoffeeOrder } from "@/components/CoffeeOrder";
import { CheckoutContext } from "@/contexts/CheckoutContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ConfirmOrder,
  OrderContainer,
  Total,
  TotalContainer,
  Wrapper,
} from "./styles";

export function Order() {
  const navigate = useNavigate();
  const { checkoutState } = useContext(CheckoutContext);
  const { cart, address, payment } = checkoutState;

  let finalPrice = 0;

  useEffect(() => {
    if (cart.length === 0) navigate("/");
  }, [cart.length]);

  cart?.forEach(coffee => {
    const price = coffee.price * coffee.qtd;
    finalPrice += price;
  });

  function handleConfirmOrder() {
    if (cart.length > 0 && address.cep && address.number && payment !== "") {
      navigate("/success");
    }
  }

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

      <ConfirmOrder
        disabled={
          cart.length === 0 || !address.cep || !address.number || payment === ""
        }
        onClick={handleConfirmOrder}
      >
        Confirmar Pedido
      </ConfirmOrder>
    </OrderContainer>
  );
}

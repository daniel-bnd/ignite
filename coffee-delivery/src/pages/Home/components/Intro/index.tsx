import {
  IconBackground,
  IntroContainer,
  IntroContent,
  Items,
  ItemsGrid,
  LeftGrid,
  Title,
} from "./styles";
import coffeeImg from "../../../../assets/coffee-img.svg";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

export function Intro() {
  return (
    <IntroContainer>
      <IntroContent className="container">
        <LeftGrid>
          <Title>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h2>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </h2>
          </Title>
          <ItemsGrid>
            <div>
              <Items>
                <IconBackground bg="yellowDark">
                  <ShoppingCart size={16} weight="fill" />
                </IconBackground>
                <span>Compra simples e segura</span>
              </Items>
              <Items>
                <IconBackground bg="yellow">
                  <Timer size={16} weight="fill" />
                </IconBackground>
                <span>Entrega rápida e rastreada</span>
              </Items>
            </div>
            <div>
              <Items>
                <IconBackground bg="gray">
                  <Package size={16} weight="fill" />
                </IconBackground>
                <span>Embalagem mantém o café intacto</span>
              </Items>
              <Items>
                <IconBackground bg="purple">
                  <Coffee size={16} weight="fill" />
                </IconBackground>
                <span>O café chega fresquinho até você</span>
              </Items>
            </div>
          </ItemsGrid>
        </LeftGrid>
        <img src={coffeeImg} alt="" />
      </IntroContent>
    </IntroContainer>
  );
}

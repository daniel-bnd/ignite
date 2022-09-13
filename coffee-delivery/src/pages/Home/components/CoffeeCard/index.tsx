import { QuantityInput } from "@/components/QuantityInput";
import { CartContext } from "@/contexts/CartContext";
import { ShoppingCart } from "phosphor-react";
import { useContext, useState } from "react";
import {
  AddCartButton,
  CoffeeActions,
  CoffeeContainer,
  CoffeeFooter,
  CoffeeImg,
  CoffeePrice,
  CoffeeTag,
  TagContainer,
} from "./styles";

interface Coffee {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface CoffeeCardProps {
  coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { addCoffeeToCart } = useContext(CartContext);
  const [coffeeQtd, setCoffeeQtd] = useState(1);

  function handleAddCoffeToCart() {
    addCoffeeToCart({ ...coffee, qtd: coffeeQtd });
  }

  function incrementCoffeeQtd() {
    setCoffeeQtd(state => state + 1);
  }

  function decrementCoffeeQtd() {
    setCoffeeQtd(state => state - 1);
  }

  return (
    <CoffeeContainer>
      <CoffeeImg src={`./coffees/${coffee.photo}`} alt="" />

      <TagContainer>
        {coffee.tags.map(tag => (
          <CoffeeTag key={coffee.id + tag}>{tag}</CoffeeTag>
        ))}
      </TagContainer>
      <strong>{coffee.name}</strong>
      <p>{coffee.description}</p>

      <CoffeeFooter>
        <CoffeePrice>
          <span>R$</span>
          {Intl.NumberFormat("pt-BR", {
            minimumFractionDigits: 2,
          }).format(coffee.price)}
        </CoffeePrice>

        <CoffeeActions>
          <QuantityInput
            coffeeQtd={coffeeQtd}
            incrementCoffeeQtd={incrementCoffeeQtd}
            decrementCoffeeQtd={decrementCoffeeQtd}
          />

          <AddCartButton onClick={handleAddCoffeToCart}>
            <ShoppingCart size={22} weight="fill" />
          </AddCartButton>
        </CoffeeActions>
      </CoffeeFooter>
    </CoffeeContainer>
  );
}

import { QuantityInput } from "@/components/QuantityInput";
import { ShoppingCart } from "phosphor-react";
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

interface CoffeeCardProps {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

export function CoffeeCard({
  id,
  tags,
  name,
  description,
  photo,
  price,
}: CoffeeCardProps) {
  return (
    <CoffeeContainer>
      <CoffeeImg src={`./coffees/${photo}`} alt="" />

      <TagContainer>
        {tags.map(tag => (
          <CoffeeTag key={id + tag}>{tag}</CoffeeTag>
        ))}
      </TagContainer>
      <strong>{name}</strong>
      <p>{description}</p>

      <CoffeeFooter>
        <CoffeePrice>
          <span>R$</span>
          {Intl.NumberFormat("pt-BR", {
            minimumFractionDigits: 2,
          }).format(price)}
        </CoffeePrice>

        <CoffeeActions>
          <QuantityInput />

          <AddCartButton>
            <ShoppingCart size={22} weight="fill" />
          </AddCartButton>
        </CoffeeActions>
      </CoffeeFooter>
    </CoffeeContainer>
  );
}

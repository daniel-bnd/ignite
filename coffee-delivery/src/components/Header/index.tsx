import { CartButton, HeaderContainer, LocationButton } from "./styles";
import logo from "../../assets/logo.svg";
import { ShoppingCart, MapPin } from "phosphor-react";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} />
      <div>
        <LocationButton>
          <MapPin size={22} weight="fill" />
          <span>Rio de Janeiro, RJ</span>
        </LocationButton>
        <CartButton>
          <ShoppingCart size={22} weight="fill" />
        </CartButton>
      </div>
    </HeaderContainer>
  );
}

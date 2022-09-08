import { CartButton, HeaderContainer, LocationButton } from "./styles";
import logo from "../../assets/logo.svg";
import { ShoppingCart, MapPin } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer className="container">
      <NavLink to="/">
        <img src={logo} />
      </NavLink>
      <div>
        <LocationButton>
          <MapPin size={22} weight="fill" />
          <span>Rio de Janeiro, RJ</span>
        </LocationButton>
        <NavLink to="/checkout">
          <CartButton>
            <ShoppingCart size={22} weight="fill" />
          </CartButton>
        </NavLink>
      </div>
    </HeaderContainer>
  );
}

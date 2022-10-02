import {
  CartButton,
  HeaderContainer,
  LocationButton,
  DialogOverlay,
  DialogContent,
  NumberOfCoffes,
} from "./styles";
import logo from "../../assets/logo.svg";
import { ShoppingCart, MapPin, ArrowRight } from "phosphor-react";
import { NavLink } from "react-router-dom";
import * as Dialog from "@radix-ui/react-dialog";
import { Input } from "../Input";
import { FormEvent, useContext, useState } from "react";
import { CheckoutContext } from "@/contexts/CheckoutContext";
import axios from "axios";
import { AddressRequest } from "@/pages/Checkout/components/Address";

export function Header() {
  const [hasError, setHasError] = useState(false);
  const [open, setOpen] = useState(false);
  const { checkoutState, setAddressCep, setAddressState } =
    useContext(CheckoutContext);

  const { address, cart } = checkoutState;

  function handleOpenModal(bool: boolean) {
    if (window.location.pathname !== "/checkout") setOpen(bool);
  }

  async function setCepValue(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (address.cep.length === 8) {
      await axios
        .get(`https://viacep.com.br/ws/${Number(address.cep)}/json/`)
        .then(response => {
          if (response.data?.erro) {
            setHasError(true);
            return;
          }
          const data: AddressRequest = response.data;

          let cepFormatted = address.cep
            .split("")
            .map((value, index) => {
              if (index === 2) {
                return "." + value;
              }
              if (index === 5) {
                return "-" + value;
              }
              return value;
            })
            .join("");

          setAddressState({
            cep: cepFormatted,
            street: data.logradouro,
            number: "",
            complement: data.complemento,
            district: data.bairro,
            city: data.localidade,
            province: data.uf,
          });

          setOpen(false);
          setHasError(false);
        });
    }
  }

  return (
    <HeaderContainer className="container">
      <NavLink to="/">
        <img src={logo} />
      </NavLink>
      <div>
        <Dialog.Root open={open} onOpenChange={handleOpenModal}>
          <LocationButton onClick={() => setAddressCep("")}>
            <MapPin size={22} weight="fill" />
            {address.city ? (
              <span>
                {address.city}, {address.province}
              </span>
            ) : (
              <span>Insira seu CEP</span>
            )}
          </LocationButton>
          <Dialog.Portal>
            <DialogOverlay />
            <DialogContent
              onCloseAutoFocus={() => {
                setHasError(false);
              }}
            >
              <Dialog.Title className="title">Insira seu CEP</Dialog.Title>
              <form className="flex-center" onSubmit={setCepValue}>
                <Input
                  className="input"
                  variant="medium"
                  placeholder="CEP"
                  value={address.cep}
                  onChange={e => setAddressCep(e.target.value)}
                  onFocus={() => setAddressCep("")}
                  hasError={hasError}
                />
                <button className="cep-button" type="submit">
                  <ArrowRight size={24} />
                </button>
              </form>
            </DialogContent>
          </Dialog.Portal>
        </Dialog.Root>

        <NavLink to={cart.length > 0 ? "/checkout" : ""}>
          <CartButton>
            <ShoppingCart size={22} weight="fill" />
            {cart.length > 0 && <NumberOfCoffes>{cart.length}</NumberOfCoffes>}
          </CartButton>
        </NavLink>
      </div>
    </HeaderContainer>
  );
}

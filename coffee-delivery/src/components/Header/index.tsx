import {
  CartButton,
  HeaderContainer,
  LocationButton,
  DialogOverlay,
  DialogContent,
  NumberOfCoffes,
} from "./styles";
import logo from "../../assets/logo.svg";
import { ShoppingCart, MapPin } from "phosphor-react";
import { NavLink } from "react-router-dom";
import * as Dialog from "@radix-ui/react-dialog";
import { Input } from "../Input";
import { useContext, useEffect, useState } from "react";
import { CheckoutContext } from "@/contexts/CheckoutContext";
import axios from "axios";
import { AddressRequest } from "@/pages/Checkout/components/Address";

export function Header() {
  const [hasError, setHasError] = useState(false);
  const [open, setOpen] = useState(false);
  const { checkoutState, setAddressCep, setAddressState } =
    useContext(CheckoutContext);

  const { address, cart } = checkoutState;

  useEffect(() => {
    if (!address.city) {
      setOpen(true);
    }
  }, []);

  useEffect(() => {
    if (address.cep.length === 8) {
      axios
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
  }, [address.cep]);

  function setCepValue(cepInput: string) {
    if (cepInput.length <= 8) {
      setAddressCep(cepInput);
    }
  }

  return (
    <HeaderContainer className="container">
      <NavLink to="/">
        <img src={logo} />
      </NavLink>
      <div>
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <LocationButton onClick={() => setAddressCep("")}>
            <MapPin size={22} weight="fill" />
            {address.city && (
              <span>
                {address.city}, {address.province}
              </span>
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
              <Input
                className="input"
                variant="medium"
                placeholder="CEP"
                value={address.cep}
                onChange={e => setCepValue(e.target.value)}
                onFocus={() => setAddressCep("")}
                hasError={hasError}
              />
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

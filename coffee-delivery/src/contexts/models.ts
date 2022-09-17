import { Coffee } from "@/reducers/cartReducer/reducer";
import { ReactNode } from "react";

export interface CheckoutContextProviderProps {
  children: ReactNode;
}

export interface AddressState {
  cep: string;
  bairro: string;
  complemento: string;
  localidade: string;
  logradouro: string;
  uf: string;
}

export interface CheckoutState {
  cart: Coffee[];
  address: AddressState;
  payment?: any;
}

export interface CheckoutContextProps {
  checkoutState: CheckoutState;
  addCoffeeToCart: (coffee: Coffee) => void;
  removeCoffeeFromCart: (coffeeId: number) => void;
  incrementCoffeeQtd: (coffeeId: number) => void;
  decrementCoffeeQtd: (coffeeId: number) => void;
  setAddressState: (address: AddressState) => void;
}

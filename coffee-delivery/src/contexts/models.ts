import { Address } from "@/reducers/addressReducer/reducer";
import { Coffee } from "@/reducers/cartReducer/reducer";
import { ReactNode } from "react";

export interface CheckoutContextProviderProps {
  children: ReactNode;
}

export interface CheckoutState {
  cart: Coffee[];
  address: Address;
  payment: "Cartão de Crétido" | "Cartão de Débito" | "Dinheiro" | "";
}

export interface CheckoutContextProps {
  checkoutState: CheckoutState;
  addCoffeeToCart: (coffee: Coffee) => void;
  removeCoffeeFromCart: (coffeeId: number) => void;
  incrementCoffeeQtd: (coffeeId: number) => void;
  decrementCoffeeQtd: (coffeeId: number) => void;
  setAddressState: (address: Address) => void;
  setAddressCep: (cep: string) => void;
  setAddressNumber: (number: string) => void;
  setAddressComplement: (complement: string) => void;
  setPayment: (
    payment: "Cartão de Crétido" | "Cartão de Débito" | "Dinheiro" | ""
  ) => void;
}

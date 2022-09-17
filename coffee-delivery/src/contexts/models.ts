import { Coffee } from "@/reducers/cartReducer/reducer";
import { ReactNode } from "react";

export interface CheckoutContextProviderProps {
  children: ReactNode;
}

export interface CheckoutState {
  cart: Coffee[];
  address?: any;
  payment?: any;
}

export interface CheckoutContextProps {
  checkoutState: CheckoutState;
  addCoffeeToCart: (coffee: Coffee) => void;
  removeCoffeeFromCart: (coffeeId: number) => void;
  incrementCoffeeQtd: (coffeeId: number) => void;
  decrementCoffeeQtd: (coffeeId: number) => void;
}

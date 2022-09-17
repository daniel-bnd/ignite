import {
  addToCartAction,
  decrementCoffeeQtdAction,
  incrementCoffeeQtdAction,
  removeFromCartAction,
} from "@/reducers/cartReducer/actions";
import { cartReducer, Coffee } from "@/reducers/cartReducer/reducer";
import { createContext, ReactNode, useReducer } from "react";

interface CheckoutContextProviderProps {
  children: ReactNode;
}

interface CheckoutState {
  cart: Coffee[];
  address?: any;
  payment?: any;
}

interface CheckoutContextProps {
  checkoutState: CheckoutState;
  addCoffeeToCart: (coffee: Coffee) => void;
  removeCoffeeFromCart: (coffeeId: number) => void;
  incrementCoffeeQtd: (coffeeId: number) => void;
  decrementCoffeeQtd: (coffeeId: number) => void;
}

export const CheckoutContext = createContext({} as CheckoutContextProps);

export function CheckoutContextProvider({
  children,
}: CheckoutContextProviderProps) {
  const [cartState, cartDispatch] = useReducer(cartReducer, []);

  function addCoffeeToCart(newCoffee: Coffee) {
    cartDispatch(addToCartAction(newCoffee));
  }

  function removeCoffeeFromCart(coffeeId: number) {
    cartDispatch(removeFromCartAction(coffeeId));
  }

  function incrementCoffeeQtd(coffeeId: number) {
    cartDispatch(incrementCoffeeQtdAction(coffeeId));
  }

  function decrementCoffeeQtd(coffeeId: number) {
    cartDispatch(decrementCoffeeQtdAction(coffeeId));
  }

  const checkoutState = {
    cart: cartState,
  };

  return (
    <CheckoutContext.Provider
      value={{
        checkoutState,
        addCoffeeToCart,
        removeCoffeeFromCart,
        incrementCoffeeQtd,
        decrementCoffeeQtd,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}

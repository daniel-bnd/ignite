import {
  addToCartAction,
  decrementCoffeeQtdAction,
  incrementCoffeeQtdAction,
  removeFromCartAction,
} from "@/reducers/cartReducer/actions";
import { cartReducer, Coffee } from "@/reducers/cartReducer/reducer";
import { createContext, useReducer, useState } from "react";
import {
  AddressState,
  CheckoutContextProps,
  CheckoutContextProviderProps,
} from "./models";

export const CheckoutContext = createContext({} as CheckoutContextProps);

export function CheckoutContextProvider({
  children,
}: CheckoutContextProviderProps) {
  const [cartState, cartDispatch] = useReducer(cartReducer, []);
  const [address, setAddress] = useState({} as AddressState);

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

  function setAddressState(address: AddressState) {
    setAddress(address);
  }

  const checkoutState = {
    cart: cartState,
    address,
  };

  return (
    <CheckoutContext.Provider
      value={{
        checkoutState,
        addCoffeeToCart,
        removeCoffeeFromCart,
        incrementCoffeeQtd,
        decrementCoffeeQtd,
        setAddressState,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}

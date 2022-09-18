import {
  setAddressCepAction,
  setAddressComplementAction,
  setAddressNumberAction,
  setAddressStateAction,
} from "@/reducers/addressReducer/actions";
import { Address, addressReducer } from "@/reducers/addressReducer/reducer";
import {
  addToCartAction,
  decrementCoffeeQtdAction,
  incrementCoffeeQtdAction,
  removeFromCartAction,
} from "@/reducers/cartReducer/actions";
import { cartReducer, Coffee } from "@/reducers/cartReducer/reducer";
import { createContext, useReducer, useState } from "react";
import { CheckoutContextProps, CheckoutContextProviderProps } from "./models";

export const CheckoutContext = createContext({} as CheckoutContextProps);

const initialAddressState = {
  cep: "",
  street: "",
  number: "",
  complement: "",
  district: "",
  city: "",
  province: "",
};

export function CheckoutContextProvider({
  children,
}: CheckoutContextProviderProps) {
  const [cartState, cartDispatch] = useReducer(cartReducer, []);

  const [addressState, addressDispatch] = useReducer(
    addressReducer,
    initialAddressState
  );

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

  function setAddressState(address: Address) {
    addressDispatch(setAddressStateAction(address));
  }

  function setAddressCep(cep: string) {
    addressDispatch(setAddressCepAction(cep));
  }

  function setAddressNumber(number: string) {
    addressDispatch(setAddressNumberAction(number));
  }

  function setAddressComplement(complement: string) {
    addressDispatch(setAddressComplementAction(complement));
  }

  const checkoutState = {
    cart: cartState,
    address: addressState,
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
        setAddressCep,
        setAddressNumber,
        setAddressComplement,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}

import {
  addToCartAction,
  decrementCoffeeQtdAction,
  incrementCoffeeQtdAction,
  removeFromCartAction,
} from "@/reducers/cartReducer/actions";
import { cartReducer, Coffee } from "@/reducers/cartReducer/reducer";
import { createContext, ReactNode, useReducer } from "react";

interface CartContextProviderProps {
  children: ReactNode;
}

interface CartContextProps {
  cartState: Coffee[];
  addCoffeeToCart: (coffee: Coffee) => void;
  removeCoffeeFromCart: (coffeeId: number) => void;
  incrementCoffeeQtd: (coffeeId: number) => void;
  decrementCoffeeQtd: (coffeeId: number) => void;
}

export const CartContext = createContext({} as CartContextProps);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, []);

  function addCoffeeToCart(newCoffee: Coffee) {
    dispatch(addToCartAction(newCoffee));
  }

  function removeCoffeeFromCart(coffeeId: number) {
    dispatch(removeFromCartAction(coffeeId));
  }

  function incrementCoffeeQtd(coffeeId: number) {
    dispatch(incrementCoffeeQtdAction(coffeeId));
  }

  function decrementCoffeeQtd(coffeeId: number) {
    dispatch(decrementCoffeeQtdAction(coffeeId));
  }

  return (
    <CartContext.Provider
      value={{
        cartState,
        addCoffeeToCart,
        removeCoffeeFromCart,
        incrementCoffeeQtd,
        decrementCoffeeQtd,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

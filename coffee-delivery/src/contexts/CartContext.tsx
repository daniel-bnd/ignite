import { createContext, ReactNode, useReducer } from "react";

interface CartContextProviderProps {
  children: ReactNode;
}

interface Coffee {
  id: number;
  name: string;
  photo: string;
  price: number;
  qtd: number;
}

interface CartProps {
  cart: Coffee[];
}

interface CartContextProps {
  addCoffeeToCart: (coffee: Coffee) => void;
}

export const CartContext = createContext({} as CartContextProps);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const cartInitialState: CartProps = {
    cart: [],
  };

  const [cartState, dispatch] = useReducer(
    (state: CartProps, { type, payload }: any) => {
      switch (type) {
        case "ADD_TO_CART":
          return {
            ...state,
            cart: [...state.cart, payload],
          };
        default:
          return state;
      }
    },
    cartInitialState
  );

  function addCoffeeToCart(newCoffee: Coffee) {
    dispatch({
      type: "ADD_TO_CART",
      payload: newCoffee,
    });
  }

  const { cart } = cartState;

  return (
    <CartContext.Provider value={{ addCoffeeToCart }}>
      {children}
    </CartContext.Provider>
  );
}

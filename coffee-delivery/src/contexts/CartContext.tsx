import { createContext, ReactNode, useState } from "react";

interface CartContextProps {
  teste: number;
}

export const CartContext = createContext({} as CartContextProps);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [teste, setTeste] = useState(1);

  return (
    <CartContext.Provider value={{ teste }}>{children}</CartContext.Provider>
  );
}

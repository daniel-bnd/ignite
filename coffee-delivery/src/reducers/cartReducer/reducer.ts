import { produce } from "immer";

import { CartActionTypes } from "./actions";

export interface Coffee {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
  qtd: number;
}

interface CartState {
  cart: Coffee[];
}

export function cartReducer(state: Coffee[], { type, payload }: any) {
  switch (type) {
    case CartActionTypes.ADD_TO_CART:
      return produce(state, draft => {
        const coffeeIndex = draft.findIndex(coffee => {
          return coffee.id === payload.id;
        });
        if (coffeeIndex >= 0) {
          if (draft[coffeeIndex].qtd + payload.qtd > 10) {
            draft[coffeeIndex].qtd = 9;
          } else {
            draft[coffeeIndex].qtd += payload.qtd;
          }
        } else {
          draft.push(payload);
        }
      });

    case CartActionTypes.REMOVE_FROM_CART:
      return produce(state, draft => {
        const newCartState = draft.filter(coffee => coffee.id !== payload);
        return (draft = newCartState);
      });

    case CartActionTypes.INCREMENT_COFFEE_QTD:
      return produce(state, draft => {
        const coffeeIndex = draft.findIndex(coffee => {
          return coffee.id === payload;
        });
        draft[coffeeIndex].qtd += 1;
      });

    case CartActionTypes.DECREMENT_COFFEE_QTD:
      return produce(state, draft => {
        const coffeeIndex = draft.findIndex(coffee => {
          return coffee.id === payload;
        });
        draft[coffeeIndex].qtd -= 1;
      });

    default:
      return state;
  }
}

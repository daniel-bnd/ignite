import { Coffee } from "./reducer";

export enum CartActionTypes {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  INCREMENT_COFFEE_QTD = "INCREMENT_COFFEE_QTD",
  DECREMENT_COFFEE_QTD = "DECREMENT_COFFEE_QTD",
}

export function addToCartAction(newCoffee: Coffee) {
  return {
    type: CartActionTypes.ADD_TO_CART,
    payload: newCoffee,
  };
}

export function removeFromCartAction(coffeeId: number) {
  return {
    type: CartActionTypes.REMOVE_FROM_CART,
    payload: coffeeId,
  };
}

export function incrementCoffeeQtdAction(coffeeId: number) {
  return {
    type: CartActionTypes.INCREMENT_COFFEE_QTD,
    payload: coffeeId,
  };
}

export function decrementCoffeeQtdAction(coffeeId: number) {
  return {
    type: CartActionTypes.DECREMENT_COFFEE_QTD,
    payload: coffeeId,
  };
}

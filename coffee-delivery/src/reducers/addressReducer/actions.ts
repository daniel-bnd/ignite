import { Address } from "./reducer";

export enum AddressActionTypes {
  SET_ADDRESS_STATE = "SET_ADDRESS_STATE",
  SET_ADDRESS_CEP = "SET_ADDRESS_CEP",
  SET_ADDRESS_NUMBER = "SET_ADDRESS_NUMBER",
  SET_ADDRESS_COMPLEMENT = "SET_ADDRESS_COMPLEMENT",
}

export function setAddressStateAction(newAddress: Address) {
  return {
    type: AddressActionTypes.SET_ADDRESS_STATE,
    payload: newAddress,
  };
}

export function setAddressCepAction(cep: string) {
  return {
    type: AddressActionTypes.SET_ADDRESS_CEP,
    payload: cep,
  };
}

export function setAddressNumberAction(number: string) {
  return {
    type: AddressActionTypes.SET_ADDRESS_NUMBER,
    payload: number,
  };
}

export function setAddressComplementAction(complement: string) {
  return {
    type: AddressActionTypes.SET_ADDRESS_COMPLEMENT,
    payload: complement,
  };
}

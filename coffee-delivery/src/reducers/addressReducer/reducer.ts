import { AddressActionTypes } from "./actions";

export interface Address {
  cep: string;
  street: string;
  number: string;
  complement: string;
  district: string;
  city: string;
  province: string;
}

export function addressReducer(state: Address, { type, payload }: any) {
  switch (type) {
    case AddressActionTypes.SET_ADDRESS_STATE:
      return (state = payload);

    case AddressActionTypes.SET_ADDRESS_CEP:
      return {
        ...state,
        cep: payload,
      };

    case AddressActionTypes.SET_ADDRESS_NUMBER:
      return {
        ...state,
        number: payload,
      };

    case AddressActionTypes.SET_ADDRESS_COMPLEMENT:
      return {
        ...state,
        complement: payload,
      };

    default:
      return state;
  }
}

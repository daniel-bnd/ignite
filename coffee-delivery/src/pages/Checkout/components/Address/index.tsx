import { Input } from "@/components/Input";
import { MapPinLine } from "phosphor-react";
import {
  AddressContainer,
  AddressHeader,
  FormContainer,
  InputWrapper,
} from "./styles";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { CheckoutContext } from "@/contexts/CheckoutContext";

export interface AddressRequest {
  bairro: string;
  complemento: string;
  localidade: string;
  logradouro: string;
  uf: string;
}

export function Address() {
  const [hasError, setHasError] = useState(false);

  const {
    checkoutState,
    setAddressState,
    setAddressCep,
    setAddressNumber,
    setAddressComplement,
  } = useContext(CheckoutContext);

  const { address } = checkoutState;

  useEffect(() => {
    if (address.cep.length === 8) {
      axios
        .get(`https://viacep.com.br/ws/${Number(address.cep)}/json/`)
        .then(response => {
          if (response.data?.erro) {
            setHasError(true);
            return;
          }
          const data: AddressRequest = response.data;

          let cepFormatted = address.cep
            .split("")
            .map((value, index) => {
              if (index === 2) {
                return "." + value;
              }
              if (index === 5) {
                return "-" + value;
              }
              return value;
            })
            .join("");

          setAddressState({
            cep: cepFormatted,
            street: data.logradouro,
            number: "",
            complement: data.complemento,
            district: data.bairro,
            city: data.localidade,
            province: data.uf,
          });

          setHasError(false);
        });
    }
  }, [address.cep]);

  function setCepValue(cepInput: string) {
    if (cepInput.length <= 8) {
      setAddressCep(cepInput);
    }
  }

  return (
    <AddressContainer>
      <AddressHeader>
        <MapPinLine size={22} />
        <div>
          <p className="title">Endereço de Entrega</p>
          <p className="subtitle">
            Informe o endereço onde deseja receber seu pedido
          </p>
        </div>
      </AddressHeader>

      <FormContainer>
        <Input
          variant="medium"
          placeholder="CEP"
          value={address.cep}
          onChange={e => setCepValue(e.target.value)}
          onFocus={() => setAddressCep("")}
          hasError={hasError}
        />
        <Input
          variant="large"
          placeholder="Rua"
          disabled
          value={address.street}
        />
        <InputWrapper>
          <Input
            variant="medium"
            type="number"
            placeholder="Número"
            disabled={!address.cep}
            value={address.number}
            onChange={e => setAddressNumber(e.target.value)}
          />
          <Input
            variant="large"
            placeholder="Complemento"
            disabled={!address.cep}
            value={address.complement}
            onChange={e => setAddressComplement(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            variant="medium"
            placeholder="Bairro"
            disabled
            value={address.district}
          />
          <Input
            variant="large"
            placeholder="Cidade"
            disabled
            value={address.city}
          />
          <Input
            variant="small"
            placeholder="UF"
            disabled
            value={address.province}
          />
        </InputWrapper>
      </FormContainer>
    </AddressContainer>
  );
}

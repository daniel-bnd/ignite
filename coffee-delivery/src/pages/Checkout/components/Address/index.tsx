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
  const [address, setAddress] = useState({});
  const [cep, setCep] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [hasError, setHasError] = useState(false);

  const { checkoutState, setAddressState } = useContext(CheckoutContext);

  console.log(checkoutState);

  useEffect(() => {
    if (cep.length === 8) {
      axios
        .get(`https://viacep.com.br/ws/${Number(cep)}/json/`)
        .then(response => {
          if (response.data?.erro) {
            setHasError(true);
            return;
          }

          const data: AddressRequest = response.data;
          setStreet(data.logradouro);
          setComplement(data.complemento);
          setDistrict(data.bairro);
          setCity(data.localidade);
          setProvince(data.uf);
          setHasError(false);
          setAddressState({ ...data, cep });
        });

      let newCepValue = cep
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

      setCep(newCepValue);
    }
  }, [cep]);

  function setCepValue(cepInput: string) {
    if (cepInput.length <= 8) {
      setCep(cepInput);
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
          value={cep}
          onChange={e => setCepValue(e.target.value)}
          onFocus={() => setCep("")}
          hasError={hasError}
        />
        <Input
          variant="large"
          placeholder="Rua"
          disabled
          value={street}
          onChange={e => setStreet(e.target.value)}
        />
        <InputWrapper>
          <Input
            variant="medium"
            type="number"
            placeholder="Número"
            disabled={cep.length < 8}
            value={number}
            onChange={e => setNumber(e.target.value)}
          />
          <Input
            variant="large"
            placeholder="Complemento"
            disabled={cep.length < 8}
            value={complement}
            onChange={e => setComplement(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            variant="medium"
            placeholder="Bairro"
            disabled
            value={district}
            onChange={e => setDistrict(e.target.value)}
          />
          <Input
            variant="large"
            placeholder="Cidade"
            disabled
            value={city}
            onChange={e => setCity(e.target.value)}
          />
          <Input
            variant="small"
            placeholder="UF"
            disabled
            value={province}
            onChange={e => setProvince(e.target.value)}
          />
        </InputWrapper>
      </FormContainer>
    </AddressContainer>
  );
}

import { Input } from "@/components/Input";
import { MapPinLine } from "phosphor-react";
import {
  AddressContainer,
  AddressHeader,
  FormContainer,
  InputWrapper,
} from "./styles";

export function Address() {
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
        <Input variant="medium" type="number" placeholder="CEP" />
        <Input variant="large" type="text" placeholder="Rua" />
        <InputWrapper>
          <Input variant="medium" type="number" placeholder="Número" />
          <Input variant="large" type="text" placeholder="Complemento" />
        </InputWrapper>
        <InputWrapper>
          <Input variant="medium" type="text" placeholder="Bairro" />
          <Input variant="large" type="text" placeholder="Cidade" />
          <Input variant="small" type="text" placeholder="UF" />
        </InputWrapper>
      </FormContainer>
    </AddressContainer>
  );
}

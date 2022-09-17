import styled from "styled-components";

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  padding: 2.5rem;
  border-radius: 6px;
  gap: 32px;
  background: ${props => props.theme.colors.base.card};
`;

export const AddressHeader = styled.header`
  display: flex;
  align-items: flex-start;
  gap: 8px;

  svg {
    color: ${props => props.theme.colors.brand.yellowDark};
  }

  .title {
    color: ${props => props.theme.colors.base.subtitle};
  }

  .subtitle {
    font: ${props => props.theme.fonts.regular.s};
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 16px;
`;

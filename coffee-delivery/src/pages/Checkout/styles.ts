import styled from "styled-components";

export const CheckoutContainer = styled.div`
  padding-top: 2.5rem;
  display: flex;
  gap: 32px;
`;

export const Title = styled.span`
  font: ${props => props.theme.fonts.title.xs};
  color: ${props => props.theme.colors.base.subtitle};
`;

export const AddressContainer = styled.div`
  flex: 1;
`;

export const OrderContainer = styled.div``;

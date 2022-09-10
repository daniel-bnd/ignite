import styled from "styled-components";

export const OrderContainer = styled.div`
  margin-top: 15px;
  width: 448px;
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  background: ${props => props.theme.colors.base.card};
  border-radius: 6px 44px 6px 44px;
`;

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .title {
    font: ${props => props.theme.fonts.regular.s};
  }
`;

export const Total = styled(Wrapper)`
  font: ${props => props.theme.fonts.bold.l};
`;

export const ConfirmOrder = styled.button`
  margin-top: 24px;
  padding: 12px 0;
  border-radius: 6px;
  background: ${props => props.theme.colors.brand.yellow};
  color: ${props => props.theme.colors.base.white};
  font: ${props => props.theme.fonts.components.buttonG};
  text-transform: uppercase;
  transition: background-color 0.2s;

  :hover {
    background: ${props => props.theme.colors.brand.yellowDark};
  }
`;

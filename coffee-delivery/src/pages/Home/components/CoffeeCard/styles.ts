import styled from "styled-components";

export const CoffeeContainer = styled.div`
  position: relative;
  width: 310px;
  padding: 7rem 1.25rem 1.25rem 1.25rem;
  border-radius: 6px 36px 6px 36px;
  background: ${props => props.theme.colors.base.card};

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  strong {
    font: ${props => props.theme.fonts.title.s};
    color: ${props => props.theme.colors.base.subtitle};
    margin-top: 1rem;
  }

  p {
    font: ${props => props.theme.fonts.regular.s};
    color: ${props => props.theme.colors.base.label};
    margin-top: 0.5rem;
  }
`;

export const CoffeeImg = styled.img`
  position: absolute;
  top: -20px;
`;

export const CoffeeTag = styled.span`
  background: ${props => props.theme.colors.brand.yellowLight};
  padding: 0.25rem 0.5rem;
  border-radius: 100px;

  font: ${props => props.theme.fonts.components.tag};
  color: ${props => props.theme.colors.brand.yellowDark};
  text-transform: uppercase;
`;

export const CoffeeFooter = styled.footer`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
`;

export const CoffeePrice = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  font: ${props => props.theme.fonts.title.m};

  span {
    font: ${props => props.theme.fonts.regular.s};
  }
`;

export const CoffeeActions = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 7.5rem;
`;

export const AddCartButton = styled.button`
  line-height: 0;
  padding: 0.5rem;
  border-radius: 6px;
  color: ${props => props.theme.colors.base.card};
  background: ${props => props.theme.colors.brand.purpleDark};

  :hover {
    filter: brightness(0.9);
  }
`;

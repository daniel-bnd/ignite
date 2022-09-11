import styled from "styled-components";

export const SuccessContainer = styled.div`
  margin-top: 80px;

  strong {
    font: ${props => props.theme.fonts.title.l};
    color: ${props => props.theme.colors.brand.yellowDark};
  }

  p {
    font: ${props => props.theme.fonts.regular.l};
    color: ${props => props.theme.colors.base.subtitle};
  }
`;

export const SuccessContent = styled.div`
  margin-top: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const OrderContainerBorder = styled.div`
  min-width: 526px;
  border: double 1px transparent;
  border-radius: 6px 36px;
  background-image: linear-gradient(
      ${props => props.theme.colors.base.background},
      ${props => props.theme.colors.base.background}
    ),
    radial-gradient(
      circle at top left,
      rgba(219, 172, 44, 1),
      rgba(128, 71, 248, 1)
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
`;

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 40px;
`;

export const OrderInfo = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

interface IconProps {
  iconColor: "purple" | "yellow" | "yellowDark";
}

export const Icon = styled.div<IconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 50%;
  color: ${props => props.theme.colors.base.background};
  background: ${props => props.theme.colors.brand[props.iconColor]};
`;

export const OrderInfoContent = styled.div`
  display: flex;
  flex-direction: column;

  .bold {
    font-weight: 700;
  }
`;

import { styled } from "styled-components";

export const PostContainer = styled.main`
  position: relative;
  z-index: 1;

  width: 100%;
  max-width: 864px;
  margin: 0 auto;
  padding-bottom: 4rem;
`;

export const PostContent = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem 2rem;

  h1,
  h2,
  h3,
  h4 {
    color: ${props => props.theme.blue};
  }

  pre {
    background: ${props => props.theme.base.post};
    padding: 1rem;

    > div {
      background: none !important;
      padding: 0 !important;
      margin: 0 !important;

      code {
        font-family: "Fira Code", monospace !important;
        line-height: 160% !important;
      }
    }
  }
`;

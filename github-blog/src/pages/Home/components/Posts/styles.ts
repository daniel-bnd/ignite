import { styled } from "styled-components";

export const PostsContainer = styled.article`
  margin-top: 4.5rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const SearchPostsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h4 {
      font-size: 1.125rem;
      font-weight: bold;
      color: ${props => props.theme.base.subtitle};
    }

    span {
      font-size: 0.875rem;
      color: ${props => props.theme.base.span};
    }
  }

  input {
    padding: 0.75rem 1rem;
    border-radius: 6px;
    border: 1px solid ${props => props.theme.base.border};
    background: ${props => props.theme.base.input};
    color: ${props => props.theme.base.text};

    &::placeholder {
      color: ${props => props.theme.base.label};
    }
  }
`;

export const PostsGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;

export const Post = styled.a`
  text-decoration: none;
  width: 416px;
  height: 260px;
  padding: 2rem;
  border-radius: 10px;
  background-color: ${props => props.theme.base.post};
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  border: 2px solid transparent;

  &:hover {
    transition: border-color 0.25s;
    border-color: ${props => props.theme.base.label};
  }

  header {
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    h3 {
      font-size: 1.25rem;
      font-weight: bold;
      color: ${props => props.theme.base.title};

      max-width: 283px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    time {
      white-space: nowrap;
      font-size: 0.875rem;
      color: ${props => props.theme.base.span};
    }
  }

  p {
    color: ${props => props.theme.base.text};
    line-height: 160%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

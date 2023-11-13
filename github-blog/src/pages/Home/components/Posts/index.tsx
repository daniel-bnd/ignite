import {
  Post,
  PostsContainer,
  PostsGrid,
  SearchPostsContainer,
} from "./styles";

export const Posts: React.FC = () => {
  const array = [1, 2, 3, 4, 5, 6];

  return (
    <PostsContainer>
      <SearchPostsContainer>
        <div>
          <h4>Publicações</h4>
          <span>6 publicações</span>
        </div>

        <input type="text" placeholder="Buscar conteúdo" />
      </SearchPostsContainer>

      <PostsGrid>
        {array.map(post => (
          <Post key={post} href="#">
            <header>
              <h3>JavaScript data types and data structures</h3>
              <time>Há 1 dia</time>
            </header>

            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn.
            </p>
          </Post>
        ))}
      </PostsGrid>
    </PostsContainer>
  );
};

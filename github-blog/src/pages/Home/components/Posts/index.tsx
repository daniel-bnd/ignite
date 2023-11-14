import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { SubmitHandler, useForm } from "react-hook-form";

import {
  Post,
  PostsContainer,
  PostsGrid,
  SearchPostsContainer,
  SearchPostsForm,
} from "./styles";
import { GITHUB_REPO, GITHUB_USER, api } from "../../../../api/github";

import MagnifyingGlassIcon from "../../../../assets/magnifying-glass.svg";
import { dateFormatter } from "../../../../utils/formatter";

interface PostType {
  id: number;
  number: number;
  title: string;
  body: string;
  created_at: string;
}

interface Data {
  post: string;
}

export const Posts: React.FC = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<Data>();

  async function getPosts(text?: string) {
    const q = text
      ? `${text.replace(" ", "%20")}%20repo:${GITHUB_USER}/${GITHUB_REPO}`
      : `repo:${GITHUB_USER}/${GITHUB_REPO}`;

    const response = await api.get(`/search/issues?q=${q}`);
    setPosts(response.data.items);
  }

  const onSubmit: SubmitHandler<Data> = async data => await getPosts(data.post);

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <PostsContainer>
      <SearchPostsContainer>
        <div>
          <h4>Publicações</h4>
          <span>6 publicações</span>
        </div>

        <SearchPostsForm onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Buscar conteúdo"
            {...register("post")}
          />
          <button type="submit" disabled={isSubmitting}>
            <img src={MagnifyingGlassIcon} />
            <span>Buscar</span>
          </button>
        </SearchPostsForm>
      </SearchPostsContainer>

      <PostsGrid>
        {posts.map(post => (
          <Post key={post.id} to={`/post/${post.number}`}>
            <header>
              <h3>{post.title}</h3>
              <time>{dateFormatter(post.created_at)}</time>
            </header>

            <div>
              <ReactMarkdown>{post.body}</ReactMarkdown>
            </div>
          </Post>
        ))}
      </PostsGrid>
    </PostsContainer>
  );
};

import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

import { GITHUB_REPO, GITHUB_USER, api } from "../../api/github";
import { Header } from "../../components/Header";
import { PostContainer, PostContent } from "./style";
import { PostHeader } from "./components/PostHeader";
import { useCallback, useEffect, useState } from "react";

export interface PostData {
  id: number;
  number: number;
  title: string;
  body: string;
  created_at: string;
  comments: number;
  user: {
    login: string;
    id: number;
  };
}

export const Post: React.FC = () => {
  const [post, setPost] = useState<PostData | null>(null);
  const { postId } = useParams();

  const getPost = useCallback(async () => {
    const response = await api.get(
      `repos/${GITHUB_USER}/${GITHUB_REPO}/issues/${postId}`
    );
    setPost(response.data);
  }, [postId]);

  useEffect(() => {
    getPost();
  }, [getPost]);

  return (
    <div>
      <Header />

      <PostContainer>
        <PostHeader post={post} />

        {!!post && (
          <PostContent>
            <ReactMarkdown
              children={post.body}
              components={{
                code({ className, children, ...props }) {
                  // const match = "javascript";
                  const match = "javascript";
                  return match ? (
                    <SyntaxHighlighter
                      children={String(children).replace(/\n$/, "")}
                      language={match}
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      style={dracula as any}
                      PreTag="div"
                      {...props}
                    />
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            />
          </PostContent>
        )}
      </PostContainer>
    </div>
  );
};

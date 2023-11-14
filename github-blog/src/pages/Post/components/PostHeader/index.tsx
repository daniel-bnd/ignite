import {
  Footer,
  LinkContainer,
  PostHeaderContainer,
  PostHeaderContent,
} from "./styles";

import ArrowUpIcon from "../../../../assets/arrow-up-right-icon.svg";
import ArrowBackIcon from "../../../../assets/arrow-back-icon.svg";
import GithubIcon from "../../../../assets/github-icon.svg";
import CalendarIcon from "../../../../assets/calendar-day-icon.svg";
import CommentIcon from "../../../../assets/comment-icon.svg";
import { PostData } from "../..";
import { GITHUB_REPO, GITHUB_USER } from "../../../../api/github";
import { dateFormatter } from "../../../../utils/formatter";

interface PostHeaderProps {
  post: PostData | null;
}

export const PostHeader: React.FC<PostHeaderProps> = ({ post }) => {
  return (
    <PostHeaderContainer>
      <PostHeaderContent>
        <header>
          <LinkContainer to="/">
            <img src={ArrowBackIcon} alt="" />
            <span>Voltar</span>
          </LinkContainer>

          <LinkContainer
            to={`https://github.com/${GITHUB_USER}/${GITHUB_REPO}/issues/${post?.number}`}
            target="_blank"
          >
            <span>Ver no Github</span>
            <img src={ArrowUpIcon} alt="" />
          </LinkContainer>
        </header>

        <h2>{post?.title}</h2>

        <Footer>
          <div>
            <img src={GithubIcon} alt="" />
            <span>{post?.user.login}</span>
          </div>
          <div>
            <img src={CalendarIcon} alt="" />
            <span>{dateFormatter(post?.created_at)}</span>
          </div>
          <div>
            <img src={CommentIcon} alt="" />
            <span>{post?.comments} comentários</span>
          </div>
        </Footer>
      </PostHeaderContent>
    </PostHeaderContainer>
  );
};

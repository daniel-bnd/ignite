import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";

export const Post: React.FC = () => {
  const { postId } = useParams();

  return (
    <div>
      <Header />
      {postId}
    </div>
  );
};

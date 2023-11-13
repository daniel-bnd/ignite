import { Header } from "../../components/Header";
import { Posts } from "./components/Posts";
import { Profile } from "./components/Profile";
import { HomeContainer } from "./styles";

export const Home: React.FC = () => {
  return (
    <>
      <Header />

      <HomeContainer>
        <Profile />
        <Posts />
      </HomeContainer>
    </>
  );
};

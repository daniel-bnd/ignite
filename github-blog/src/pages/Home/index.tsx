import { Header } from "../../components/Header";
import { Profile } from "./components/Profile";
import { HomeContainer } from "./styles";

export const Home: React.FC = () => {
  return (
    <>
      <Header />

      <HomeContainer>
        <Profile />
      </HomeContainer>
    </>
  );
};

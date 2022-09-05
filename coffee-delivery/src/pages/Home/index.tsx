import { CoffeeCard } from "./components/CoffeeCard";
import { Intro } from "./components/Intro";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <>
      <Intro />

      <HomeContainer className="container">
        <h2>Nossos Cafés</h2>

        <CoffeeCard />
      </HomeContainer>
    </>
  );
}

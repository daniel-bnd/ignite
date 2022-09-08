import { CoffeeCard } from "./components/CoffeeCard";
import { Intro } from "./components/Intro";
import { CoffeeGrid, HomeContainer } from "./styles";

import { coffees } from "@/data/coffee";

export function Home() {
  return (
    <>
      <Intro />

      <HomeContainer className="container">
        <h2>Nossos Cafés</h2>

        <CoffeeGrid>
          {coffees.map(coffee => (
            <CoffeeCard
              key={coffee.id}
              id={coffee.id}
              tags={coffee.tags}
              name={coffee.name}
              description={coffee.description}
              photo={coffee.photo}
              price={coffee.price}
            />
          ))}
        </CoffeeGrid>
      </HomeContainer>
    </>
  );
}

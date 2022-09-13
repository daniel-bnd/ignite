import { CoffeeCard } from "./components/CoffeeCard";
import { Intro } from "./components/Intro";
import { CoffeeGrid, HomeContainer } from "./styles";

import { coffees } from "@/data/coffee";
import { useContext } from "react";
import { CartContext } from "@/contexts/CartContext";

export function Home() {
  return (
    <>
      <Intro />

      <HomeContainer className="container">
        <h2>Nossos Cafés</h2>

        <CoffeeGrid>
          {coffees.map(coffee => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </CoffeeGrid>
      </HomeContainer>
    </>
  );
}

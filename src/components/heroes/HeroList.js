import React, { useMemo } from "react"
import { getHeroesByPublisher } from "../../selectors/getHeroByPublisher"
import { HeroCard } from "./HeroCard"

const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

  return (
    <div
      className="animate__animated animate__fadeIn"
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", width: "100%" }}
    >
      {heroes.map(hero => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  )
}

export default HeroList

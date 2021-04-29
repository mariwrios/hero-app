import React from "react"
import { Link } from "react-router-dom"

export const HeroCard = ({ id, superhero, alter_ego, first_appearance, characters }) => {
  return (
    <div className="  card" style={{ margin: 20, maxWidth: 300 }}>
      <div>
        <div>
          <img style={{ maxWidth: 300 }} src={`./assets/heroes/${id}.jpg`} alt={superhero} />
          <div style={{ maxWidth: 300, padding: 25, boxSizing: "border-box" }}>
            <h5>{superhero}</h5>
            <p>
              <small className="text-muted">{first_appearance}</small>
            </p>
            <Link to={`./hero/${id}`}>More. . .</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

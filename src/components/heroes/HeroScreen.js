import React, { useMemo } from "react"
import { useParams, Redirect } from "react-router-dom"
import { getHeroesById } from "../../selectors/getHeroById"

const HeroScreen = ({ history }) => {
  const { heroeId } = useParams()
  const hero = useMemo(() => getHeroesById(heroeId), [heroeId])

  if (!hero) {
    return <Redirect to="/" />
  }

  const { superhero, publisher, alter_ego, first_appearance, characters, id } = hero

  const handleReturn = () => {
    history.length <= 2 ? history.push("/") : history.goBack()
  }

  return (
    <div>
      <h1>HeroScreen</h1>
      <hr />
      <div
        className="animate__animated animate__fadeIn "
        style={{
          marginTop: 100,
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center"
        }}
      >
        <div style={{ display: "flex" }}>
          <img style={{ width: 250 }} src={`../assets/heroes/${id}.jpg`} alt={id} />
          <div style={card}>
            <h2>{superhero}</h2>
            <h5>Datos destacables</h5>
            <p>
              <strong>Publisher: </strong>
              {publisher}
            </p>

            <p>
              <strong>First appearance: </strong>
              {first_appearance}
            </p>
            <p>
              <strong>Alter ego: </strong>
              {alter_ego}
            </p>
            {characters !== alter_ego && (
              <p>
                <strong>Other names: </strong>
                {characters}
              </p>
            )}
            <button className="btn btn-primary" onClick={handleReturn}>
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const card = {
  width: 360,
  display: "flex",
  margin: "0px 30px",
  justifyContent: "space-between",
  flexDirection: "column"
}

export default HeroScreen

import React, { useMemo } from "react"

import { HeroCard } from "../heroes/HeroCard"
import { useForm } from "../Hooks/useForm"
import { useLocation } from "react-router-dom"
import queryString from "query-string"
import getHeroByName from "../../selectors/getHeroByName"

const SearchScreem = ({ history }) => {
  const location = useLocation()

  const { q = "" } = queryString.parse(location.search)

  const [formValues, handleInputChange, reset] = useForm({
    name: q
  })
  const { name } = formValues

  const handleSubmit = e => {
    e.preventDefault()
    history.push(`?q=${name}`)
  }
  const heroesFilters = useMemo(() => getHeroByName(q), [q])

  return (
    <div>
      <h1>Search Screen</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4> Search form</h4>
          <form
            style={{
              display: "flex",
              flexDirection: "column"
            }}
            onSubmit={handleSubmit}
          >
            <input
              style={{
                height: 50,
                marginBottom: 15
              }}
              onChange={handleInputChange}
              type="text"
              autoComplete="off"
              placeholder="Find your hero"
              className="form-control"
              value={name}
              name="name"
            />
            <button className="btn m-1 btn-block btn-outline-primary">Search. . .</button>
          </form>
        </div>
        <div className="col-7 ">
          <h4>Results</h4>
          <hr />

          {q === "" && <div className="alert alert-info"> Search a Hero</div>}
          {q !== "" && heroesFilters.length === 0 && (
            <div className="alert alert-danger"> There is no a hero with {q} </div>
          )}
          <div
            className="animate__animated animate__fadeIn "
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center"
            }}
          >
            {heroesFilters.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchScreem

import React, { useContext } from "react"
import { AuthContext } from '../../auth/AuthContexr'
import { Link, NavLink, useHistory } from "react-router-dom"
import { types } from '../../types/types'


export const Navbar = () => {

  const { user, dispatch } = useContext(AuthContext)
  const history = useHistory()
  const handleLogout = () => {
    history.replace('/login')
    dispatch({
      type: types.logout,
    })
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink activeClassName="active" className="nav-item nav-link" exact to="/marvel">
            Marvel
          </NavLink>

          <NavLink activeClassName="active" className="nav-item nav-link" exact to="/dc">
            DC
          </NavLink>

          <NavLink activeClassName="active" className="nav-item nav-link" exact to="/search">
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul
          className="navbar-nav ml-auto"
          style={{
            position: "absolute",
            right: 80,
            bottom: 6
          }}
        >
          <span className="nav-item nav-link text-info">
            {user.user}
          </span>
          <button className="nav-item nav-link btn" onClick={handleLogout}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  )
}

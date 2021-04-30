import React, { useContext } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import LoginScreen from "../components/login/LoginScreen"
import DashboarRoutes from "./DashboarRoutes"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoutes } from "./PublicRoute"
import { AuthContext } from "../auth/AuthContexr"

const AppRouter = () => {
  const { user } = useContext(AuthContext)

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoutes exact path="/login" isAuthenticated={user.logged} component={LoginScreen} />

          <PrivateRoute path="/" isAuthenticated={user.logged} component={DashboarRoutes} />
        </Switch>
      </div>
    </Router>
  )
}



export default AppRouter

import React, { useContext } from "react"
import { types } from '../../types/types'
import { AuthContext } from "../../auth/AuthContexr"
import { useForm } from "../Hooks/useForm"

const LoginScreen = ({ history }) => {

  const { dispatch } = useContext(AuthContext)
  const [formValues, handleInputChange, reset] = useForm({
    name: ''
  })
  const { name } = formValues

  const lastPath = localStorage.getItem('lasPath') || '/'

  const handleLogin = () => {
    if (name.length > 2) {
      history.replace(lastPath)
      dispatch({
        type: types.login,
        payload: { user: `${name}` }
      })
    }
   

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    reset()
  }



  return (
    <div className="container mt-5">
      <h1>Login Screen</h1>
      <hr />

      <form onSubmit={handleSubmit}>
        {(name.length <= 2) && (<div className="alert alert-info"> Write a name</div>)}

        <input
          style={{
            height: 50,
            marginBottom: 15
          }}
          onChange={handleInputChange}
          type="text"
          autoComplete="off"
          placeholder="Name"
          className="form-control"
          value={name}
          name="name"
        />
        <button className="btn btn-primary" onClick={handleLogin}>
          Login
      </button>
      </form>
    </div>
  )
}

export default LoginScreen

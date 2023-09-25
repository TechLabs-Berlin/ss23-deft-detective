import { useState } from "react"
import axios from "axios"

const API_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:1000"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
    const requestBody = { email, password }

    axios.post(`${API_URL}/login`, requestBody)
      .then((result) => {
        setLogin(true)
      })
      .catch((error) => {
        error = new Error()
      });
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>

      <h3>Login</h3>

      <label>Email:</label>
      <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <label>Password:</label>
      <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <button type="submit" onClick={(e) => handleSubmit(e)}>Login</button>
      {login ? (
        <p className="text-success">You Are Logged in Successfully</p>
      ) : (
        <p> </p>
      )}
    </form>

  )
}

export default Login
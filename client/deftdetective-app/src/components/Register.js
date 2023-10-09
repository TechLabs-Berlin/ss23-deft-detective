import { useState } from "react"
import { Outlet } from "react-router-dom"
import axios from "axios"
import { Link } from "react-router-dom"


const API_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:1000"

function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [register, setRegister] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault()

    const requestBody = { email, password }
    axios.post(`${API_URL}/signup`, requestBody)
      .then((result) => {
        setRegister(true)
      })
      .catch((error) => {
        error = new Error()
      })
  }

  return (
    <div >
      <form onSubmit={(e) => handleSubmit(e)}>

        <h3>Sign up</h3>

        <label>E-mail:</label>
        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />


        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <Link to="/submitmessage"><button type="submit" onClick={(e) => handleSubmit(e)}>Create my account</button></Link>
        {register ? (
          <p className="text-success">You Are Registered Successfully</p>
        ) : (
          <p> </p>
        )}
      </form>

      <Outlet />
    </div>
  )
}

export default Register
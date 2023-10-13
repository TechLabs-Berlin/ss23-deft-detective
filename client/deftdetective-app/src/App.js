import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { What } from "./pages/What"
import { When } from "./pages/When"
import { Where } from "./pages/Where"
import { Preview } from "./pages/Preview"
import { SignUp } from "./pages/SignUp"
import { SubmitMessage } from "./pages/SubmitMessage"
import Register from './components/Register'
import Login from './components/Login'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/what" element={<What />} />
      <Route path="/when" element={<When />} />
      <Route path="/where" element={<Where />} />
      <Route path="/preview" element={<Preview />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/SignUp" element={<Register />}>
        <Route index element={<Login />} />
      </Route>
      <Route path="/SubmitMessage" element={<SubmitMessage />} />
    </Routes>
  )
}

export default App
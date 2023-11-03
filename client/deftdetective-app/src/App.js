import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { What } from "./pages/What"
import { When } from "./pages/When"
import { Where } from "./pages/Where"
import { Preview } from "./pages/Preview"
import { Mail } from "./pages/Mail"
import { FormDataProvider } from './components/FormDataContext';
import { SubmitMessage } from "./pages/SubmitMessage"

function App() {
  return (
    <FormDataProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/what" element={<What />} />
        <Route path="/when" element={<When />} />
        <Route path="/where" element={<Where />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/Mail" element={<Mail />} />
        <Route path="/SubmitMessage" element={<SubmitMessage />} />
      </Routes>
    </FormDataProvider>
  )
}

export default App

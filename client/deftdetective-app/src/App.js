import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from './components/Register'
import Login from './components/Login'
import Homepage from './Homepage'
import MapPage from './components/Map'
import CoordinatesDisplay from './components/CoordinatesDisplay'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/where" element={<MapPage />} />
          <Route path="/where" element={<CoordinatesDisplay />} />
          <Route path="/auth" element={<Register />}>
            <Route index element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

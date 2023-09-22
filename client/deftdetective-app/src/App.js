import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
// import  Preview  from './pages/Preview'
// import  SignUp  from './pages/SignUp'
// import  SubmitMessage  from './pages/SubmitMessage'
import What from './pages/What'
// import  When  from './pages/When'
// import  Where  from './pages/Where'
// import  Navbar from '.components/Navbar'
// import  Stepbar  from '.components/Stepbar'

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Home />} />'
        {/* <Route path='preview' element={<Preview />} />'
        <Route path='signup' element={<SignUp />} />'
        <Route path='submitmessage' element={<SubmitMessage />} />' */}
        <Route path='what' element={<What />} />'
        {/* <Route path='when' element={<When />} />'
        <Route path='where' element={<Where />} />' */}
      </Routes>
    </>
  )
}

export default App;
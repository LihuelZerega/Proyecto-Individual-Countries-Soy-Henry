import { Routes, Route, Link } from 'react-router-dom';
import './App.css'
import HomePage from './Routes/HomePage/HomePage'
import LandingPage from './Routes/LandingPage/LandingPage'

function App() {
  return (
    <>
      <Link to='/'></Link>
      <Link to='/HomePage'></Link>

      <Routes>
        <Route path='/HomePage' element={<HomePage />} />
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </>
  )
}

export default App

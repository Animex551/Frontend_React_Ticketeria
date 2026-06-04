import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import LoginPage from '../Pages/LoginPage'
import Menu from './Menu'
import "../css/App.css"

function App() {
  return (
    <>
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LoginPage" element={<LoginPage />} />
      </Routes>
    </>
  )
}

export default App
import { Routes, Route } from 'react-router-dom'

import Home from '../Pages/Home'
import LoginPage from '../Pages/LoginPage'
import Ticketeria from "../Pages/Ticketeria"
import Contacto from '../Pages/ContactoPage'

function Rutas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/LoginPage" element={<LoginPage />} />
      <Route path="/Ticketeria" element={<Ticketeria />} />
      <Route path='/Contacto' element={<Contacto />}/>

    </Routes>
  )
}

export default Rutas
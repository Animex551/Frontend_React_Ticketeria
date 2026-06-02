import './App.css'
import { BrowserRouter } from 'react-router-dom';
import Rutas from "./components/Rutas"
import Header from "./components/Header"
import Home from "./components/Home"
import Footer from "./components/Footer"
import Nav from "./components/Nav"


function App() {
  return(
    <main>
      <Nav/>
     <Header /> 
      <Home/>
      <Footer/>
    </main>
  )
}

export default App

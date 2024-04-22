import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <SideBar />
        <div className="pl-4">
          <Routes>
            <Route path="/" element={<h1>Inicio</h1>}></Route>
            <Route path="*" element={<h1>400 Page not found.</h1>} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  )
}

export default App

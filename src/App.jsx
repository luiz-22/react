import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
// ------------------------------ Conceptos Principales ------------------------------
import JSX from './pages/principales/JSX'
import Propiedades from './pages/principales/Propiedades'
import Eventos from './pages/principales/Eventos'
import Listas from './pages/principales/Listas'
// ------------------------------ Hooks ------------------------------
import UseState from './pages/hooks/UseState'
import UseEffect from './pages/hooks/UseEffect'
import UseRef from './pages/hooks/UseRef'
import UseCallback from './pages/hooks/UseCallback'
import UseMemo from './pages/hooks/UseMemo'
import UseContext from './pages/hooks/UseContext'
// ------------------------------ APIs ------------------------------
import Memo from './pages/apis/Memo'

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <SideBar />
        <div className="w-full p-4 overflow-y-scroll">
          <Routes>
            <Route path="/" element={<><h1>Inicio</h1><p>Un poco de práctica...</p></>}></Route>

            {/* ------------------------------ Conceptos Principales ------------------------------ */}
            <Route path="/jsx" element={<JSX />}></Route>
            <Route path="/propiedades" element={<Propiedades
              cadena="Esto es una cadena de texto"
              numero={19}
              booleano={true}
              arreglo={[1, 2, 3]}
              objeto={{ nombre: "Juan", correo: "juan123@gmail.com" }}
              funcion={(num) => num * num}
              elementoReact={<i>Esto es un elemento React</i>}
            />}></Route>
            <Route path="/eventos" element={<Eventos />}></Route>
            <Route path="/listas" element={<Listas />}></Route>

            {/* ------------------------------ Hooks ------------------------------ */}
            <Route path="/usestate" element={<UseState />}></Route>
            <Route path="/useeffect" element={<UseEffect />}></Route>
            <Route path="/useref" element={<UseRef />}></Route>
            <Route path="/usecallback" element={<UseCallback />}></Route>
            <Route path="/usememo" element={<UseMemo/>}></Route>
            <Route path="/usecontext" element={<UseContext/>}></Route>

            {/* ------------------------------ APIs ------------------------------ */}
            <Route path="/memo" element={<Memo />}></Route>

            <Route path="*" element={<h1>400 Page not found.</h1>} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  )
}

export default App

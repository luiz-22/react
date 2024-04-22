import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="flex-none flex-shrink-0 w-80 overflow-y-scroll text-sm py-2 px-7">
      <ul>
        <li>
          <Link to="" className="pl-4">
            Inicio
          </Link>
        </li>
        <li>
          <Link to="rutas-basicas" className="pl-4">
            Rutas básicas
          </Link>
        </li>
        <li>
          <Link to="rutas-parametros" className="pl-4">
            Rutas con parámetros
          </Link>
        </li>
        <li>
          <Link to="rutas-secundarias" className="pl-4">
            Rutas Secundarias
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;

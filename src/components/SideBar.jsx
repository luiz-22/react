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
        <br />
        <li className="font-bold">Conceptos Principales</li>
        <li>
          <Link to="jsx" className="pl-4">
            JSX
          </Link>
        </li>
        <li>
          <Link to="propiedades" className="pl-4">
            Propiedades
          </Link>
        </li>
        <li>
          <Link to="eventos" className="pl-4">
            Eventos
          </Link>
        </li>
        <li>
          <Link to="listas" className="pl-4">
            Listas
          </Link>
        </li>
        <br />
        <li className="font-bold">Hooks</li>
        <li>
          <Link to="usestate" className="pl-4">
            useState()
          </Link>
        </li>
        <li>
          <Link to="useeffect" className="pl-4">
            useEffect()
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;

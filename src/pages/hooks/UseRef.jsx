import { useRef } from "react"

export default function UseRef() {

    let refMenu = useRef(),
        refMenuBtn = useRef();

    //setTimeout(() => console.log(refMenu, refMenuBtn), 1000)

    const handleToggleMenu = () => {
        if (refMenuBtn.current.textContent === "Menú") {       // Uso la referencia para manupular el elemento
            refMenuBtn.current.textContent = "Cerrar";         // Atributo current de las referencia
            refMenu.current.style.display = "block";           // Si no la tengo asignada a ningún elemento es undefined
        } else {
            refMenuBtn.current.textContent = "Menú";
            refMenu.current.style.display = "none";
        }
    };

    return (
        <>
            <h1>useRef()</h1>

            <p>Sería la menera de manipular el DOM según ciertos casos.</p>
            <p>Es como un selector que ya existe en el DOM, pero dentro de React.</p>
            <p>Cuando una referencia es pasada a un elemento en el renderizado, una referencia al nodo pasa a ser accesible
                en el atributo <code>current</code> de la referencia.</p>

            <br />

            <button ref={refMenuBtn} onClick={handleToggleMenu}>    {/* Tengo que usar el atributo ref */}
                Menú
            </button>
            <nav ref={refMenu} style={{ display: "none" }}>
                <a href="#seccion1">Sección 1</a>
                <br />
                <a href="#seccion2">Sección 2</a>
                <br />
                <a href="#seccion3">Sección 3</a>
                <br />
                <a href="#seccion4">Sección 4</a>
                <br />
                <a href="#seccion5">Sección 5</a>
            </nav>
        </>
    )
}
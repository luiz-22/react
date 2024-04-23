import PropTypes from "prop-types"

export default function Propiedades(props) {
    return (
        <>
            <h1>{props.porDefecto}</h1>
            <p>Las props son de solo lectura. Un componente nunca debe modificar sus props.</p>
            <p>{props.cadena}</p>
            <p>{props.numero}</p>
            <p>{props.booleano ? "Verdadero" : "Falso"}</p>
            <p>{props.arreglo.join(", ")}</p>
            <p>{props.objeto.nombre + " - " + props.objeto.correo}</p>
            <p>{props.arreglo.map(props.funcion).join(", ")}</p>
            <p>{props.elementoReact}</p>
        </>
    )
}

Propiedades.defaultProps = {
    porDefecto: "Propiedades",
}

Propiedades.propTypes = {
    cadena: PropTypes.string.isRequired,
    numero: PropTypes.number.isRequired,
    booleano: PropTypes.bool.isRequired,
    arreglo: PropTypes.array.isRequired,
    objeto: PropTypes.object.isRequired,
    funcion: PropTypes.func.isRequired,
    elementoReact: PropTypes.element.isRequired,
    porDefecto: PropTypes.string,
}
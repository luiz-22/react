const numbers = [1, 2, 3, 4, 5]

const listItems = numbers.map((number, index) =>
    <li key={index}>{number}</li>
)

export default function Listas() {
    return (
        <>
            <h1>Listas</h1>

            <p>No se recomienda usar índices para keys si el orden de los ítems puede cambiar. Esto puede impactar
                negativamente el rendimiento y puede causar problemas con el estado del componente. </p>

            <br />

            <ul>{listItems}</ul>
        </>
    )
}
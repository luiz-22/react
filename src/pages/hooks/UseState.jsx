import { useState } from "react"

export default function UseState() {

    const [count, setCount] = useState(0)

    return (
        <>
            <h1>useState()</h1>

            <p>El único argumento que se puede pasar al Hook useState() es el estado inicial. Puede ser de cualquier tipo.</p>

            <br />

            <p>Hiciste click {count} veces</p>

            <br />

            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </>
    )
}
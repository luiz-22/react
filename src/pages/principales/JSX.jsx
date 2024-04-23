const name = 'Josh Perez'
const elemento = <p>Hola, {name}</p>

function formarNombre(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};

function saludo(user) {
    if (user) {
        return <p>Hello, {formarNombre(user)}!</p>;
    }
    return <p>Hello, Stranger.</p>;
}

export default function JSX() {

    return (
        <>
            <h1>JSX</h1>

            <p>Puedes poner cualquier expresión de JavaScript dentro de llaves en JSX.</p>

            <br />

            {elemento}

            <br />

            <p>JSX también es una expresión. Esto significa que puedes usar JSX dentro de declaraciones if y bucles for,
                asignarlo a variables, aceptarlo como argumento, y retornarlo desde dentro de funciones.</p>

            <br />

            {saludo(user)}

        </>
    )
}
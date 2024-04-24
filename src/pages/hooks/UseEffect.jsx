import { useState, useEffect } from "react"

export default function UseEffect() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Función para obtener los datos de la API
        const fetchData = async () => {
            try {
                // Hacer la solicitud a la API
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                // Convertir la respuesta a formato JSON
                const data = await response.json();
                // Actualizar el estado con los datos de los usuarios
                setUsers(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        // Llamar a la función para obtener datos cuando el componente se monte
        fetchData();
    }, []); // El segundo parámetro es un array vacío, lo que significa que se ejecutará solo una vez al montar el componente


    useEffect(() => {
    }, [])                // Se ejecute solo una vez


    useEffect(() => {
    })                    // No dejar sin el 2° parámetro  


    useEffect(() => {
        return () => {    // Fase de desmontaje
        }
    })

    return (
        <>
            <h1>useEffect()</h1>

            <p>Permite representar el ciclo de vida de un componente.</p>
            <p>useEffect, aparte de recibir una callback, recibe un array con las dependencias.</p>

            <h2>Lista de Usuarios</h2>

            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </>
    )
}
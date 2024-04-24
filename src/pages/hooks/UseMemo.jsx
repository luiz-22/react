import { memo, useMemo, useState, useCallback } from "react";
import PropTypes from "prop-types";

const Contador = memo(({ contador, sumar, restar }) => {
  // console.log("Contador se renderiza");
  const superNumero = useMemo(() => {
    let numero = 0;

    for (let i = 0; i < 1000000000; i++) {
      numero++;
    }

    return numero;
  }, []);                      // Se renderiza una sola vez

  return (
    <>
      <h3>Contador</h3>

      <div>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </div>

      <p>{contador}</p>

      <h3>{superNumero}</h3>
    </>
  )
});

Contador.displayName = "Contador"; // Asigna el nombre del componente

Contador.propTypes = { // Agrega validación de tipos
  contador: PropTypes.number.isRequired,
  sumar: PropTypes.func.isRequired,
  restar: PropTypes.func.isRequired,
};

export default function UseMemo() {
  const [contador, setContador] = useState(0);

  const sumar = useCallback(() => setContador(contador + 1), [contador]); // uso useCallback así no se vuelva a renderizar

  const restar = useCallback(() => setContador(contador - 1), [contador]);

  return (
    <>
      <h1>useMemo</h1>

      <p>
        Memoriza un valor calculado, es decir, el resultado de una función.
        Genera propiedades computadas. Úsalo en procesos pesados.
      </p>

      <br />

      <div>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </div>
      <p>{contador}</p>

      <Contador contador={contador} sumar={sumar} restar={restar} />
    </>
  );
}

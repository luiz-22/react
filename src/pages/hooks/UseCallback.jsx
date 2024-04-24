import { memo, useState, useCallback } from "react";
import PropTypes from "prop-types";

const Contador1 = memo(({ contador, sumar, restar }) => {
  // console.log("Contador 1 se renderiza");
  return (
    <>
      <h3>Contador 1</h3>

      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>

      <p>{contador}</p>
    </>
  )
});

Contador1.displayName = "Contador1"; // Asigna el nombre del componente

Contador1.propTypes = { // Agrega validación de tipos
  contador: PropTypes.number.isRequired,
  sumar: PropTypes.func.isRequired,
  restar: PropTypes.func.isRequired,
};

const Contador2 = memo(({ contador, sumar, restar }) => {
  // console.log("Contador 2 se renderiza");
  return (
    <>
      <h3>Contador 2</h3>

      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>

      <p>{contador}</p>
    </>
  )
});

Contador2.displayName = "Contador2"; // Asigna el nombre del componente

Contador2.propTypes = { // Agrega validación de tipos
  contador: PropTypes.number.isRequired,
  sumar: PropTypes.func.isRequired,
  restar: PropTypes.func.isRequired,
};

export default function UseCallback() {
  const [contador, setContador] = useState(0);

  const sumar = useCallback(() => setContador(contador + 1), [contador]);

  const restar = useCallback(() => setContador(contador - 1), [contador]);

  return (
    <>
      <h1>useCallback</h1>

      <p>
        Si paso una función a un componente que esta memorizando, se vuelve a
        renderizar. Para que no ocurra eso, tengo que usar{" "}
        <code>useCallback</code>.
      </p>
      <p>
        Memoriza una función, para no volverla a definir en cada render. Úsalo
        siempre que se pase una función como prop a un componente memorizado.
        Úsalo siempre que se pase una función como parámetro de un efecto.
      </p>

      <br />

      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <p>{contador}</p>

      <br />

      <Contador1 contador={contador} sumar={sumar} restar={restar} />

      <br />

      <Contador2 contador={contador} sumar={sumar} restar={restar} />
    </>
  );
}

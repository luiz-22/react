import { memo, useState } from "react";

const Contador1 = () => {
  // console.log("Contador 1 se renderiza")
  return (
    <></>
  )
}

const Contador2 = memo(() => {
  // console.log("Contador 2 se renderiza");
  return <></>;
});
Contador2.displayName = "Contador2"; // Asigna el nombre del componente

export default function Memo() {
  const [contador, setContador] = useState(0);

  const sumar = () => setContador(contador + 1);

  const restar = () => setContador(contador - 1);

  return (
    <div>
      <h1>Memo</h1>

      <p>
        <code>memo</code> te permite saltarte el rerenderizado de un componente cuando sus props no han cambiado.
      </p>

      <br />

      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>

      <br />
      
      <p>{contador}</p>

      <Contador1 />
      <Contador2 />
    </div>
  );
}

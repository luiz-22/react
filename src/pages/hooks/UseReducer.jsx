import { useReducer } from "react";
import { TYPES } from "./reducer/contadorActions";
import {
  contadorReducer,
  contadorInitialState,
  contadorInit,
} from "./reducer/contadorReducer";
import useReducerImg from "./reducer/useReducer.svg"

const UseReducer = () => {
  const [state, dispatch] = useReducer(// Estado y función de actualización
    contadorReducer, // Función reductora
    contadorInitialState, // Variable de estado
    contadorInit // Función para modificar el estado inicial (opcional)
  );

  const sumar = () => dispatch({ type: TYPES.INCREMENT });

  const sumar5 = () => dispatch({ type: TYPES.INCREMENT_5, payload: 5 });

  const restar = () => dispatch({ type: TYPES.DECREMENT });

  const restar5 = () => dispatch({ type: TYPES.DECREMENT_5, payload: 5 });

  const reset = () => dispatch({ type: TYPES.RESET });

  return (
    <div>
      <h1>UseReducer</h1>
      <p>
        Una alternativa a <code>useState</code>. <code>useReducer</code> a
        menudo es preferible a <code>useState</code> cuando se tiene una lógica
        compleja que involucra múltiples subvalores o cuando el próximo estado
        depende del anterior. No podemos usar useEffect, ni hacer peticiones
        asíncronas.
      </p>
      <img src={useReducerImg} alt="useReducer"/>
      <br/>
      <nav>
        <button onClick={sumar5}>+5</button>
        <button onClick={sumar}>+</button>
        <button onClick={reset}>0</button>
        <button onClick={restar}>-</button>
        <button onClick={restar5}>-5</button>
      </nav>
      <br />
      <h3>{state.contador}</h3>
    </div>
  );
};

export default UseReducer;

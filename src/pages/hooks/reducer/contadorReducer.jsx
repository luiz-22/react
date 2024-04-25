import { TYPES } from "./contadorActions";

export const contadorInitialState = { contador: 0 };

export const contadorInit = (initialState) => {
  return {
    contador: initialState.contador + 100,
  };
};

// Recibe el estado anterior y un objeto que se va a llamar action. action va a ser un 
//objeto que va a tener un tipo de acción (tipo de acción que se va a ejecutar), y 
//adicionalmente puede o no, tener payload, el payload es como el valor que le estamos
//mandando para que modifique el estado
// Esta función siempre va a retornar el estado

// El objeto action tiene 2 propieades, el type de la acción y el payload
// Se acostumbra a usar switch

export function contadorReducer(state, action) {  
  switch (action.type) {
    case TYPES.INCREMENT:
      return { contador: state.contador + 1 };
    case TYPES.INCREMENT_5:
      return { contador: state.contador + action.payload };
    case TYPES.DECREMENT:
      return { contador: state.contador - 1 };
    case TYPES.DECREMENT_5:
      return { contador: state.contador - action.payload };
    case TYPES.RESET:
      return contadorInitialState;
    default:
      return state;
  }
}

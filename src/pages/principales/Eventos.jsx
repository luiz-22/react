import PropTypes from 'prop-types';

const Boton = ({ botonOnClick }) => (
  <button onClick={botonOnClick}>Saludar (componente)</button>
);

Boton.propTypes = {
  botonOnClick: PropTypes.func.isRequired,
};

const manejadorClick = (e, saludo) => {
  console.log(e);                // Evento sintético de React
  console.log(e.nativeEvent);    // Evento nativo de js
  console.log(saludo);
};

const Eventos = () => {
  return (
    <section>
      <h1>Eventos</h1>

      <br />

      <button onClick={(e) => manejadorClick(e, "Hola")}>Saludar</button>

      <br /><br />

      <Boton botonOnClick={(e) => manejadorClick(e, "Hola de nuevo")} />
    </section>
  );
};

export default Eventos;

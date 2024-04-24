import { createContext, useState } from "react";
import PropTypes from "prop-types"; // Importa PropTypes

const ThemeContext = createContext();

const initialTheme = "light";

const ThemeProvider = ({ children }) => {     
  const [theme, setTheme] = useState(initialTheme);

  const handleTheme = (e) => {
    if (e.target.value === "light") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const data = { theme, handleTheme };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;  // Retornamos solo el proveedor
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired, // Valida que children sea un nodo de React
};

export { ThemeProvider };
export default ThemeContext;

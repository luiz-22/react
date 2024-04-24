import { createContext, useState } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

const initialAuth = null;

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialAuth);

  const handleAuth = () => {
    if (auth) {
      setAuth(null);
    } else {
      setAuth(true);
    }
  };

  const data = { auth, handleAuth };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired, // Valida que children sea un nodo de React
};

export { AuthProvider };
export default AuthContext;

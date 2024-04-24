import { useContext } from "react";
import ThemeContext from "./ThemeContext";
import AuthContext from "./AuthContext";

export default function MainContext() {

    const { theme } = useContext(ThemeContext);
    const { auth } = useContext(AuthContext);

    return (
        <div className={theme}>
            <h3>Main</h3>
            {auth ? <p>Hola Usuario</p> : <p>Bienvenido</p>}
        </div>
    )
}
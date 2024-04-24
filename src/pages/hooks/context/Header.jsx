import { useContext } from "react";
import ThemeContext from "./ThemeContext";
import AuthContext from "./AuthContext";

export default function HeaderContext() {
    const { theme, handleTheme } = useContext(ThemeContext);
    const { auth, handleAuth} = useContext(AuthContext)

    return (
        <div className={theme}>
            <h3>Header</h3>
            <input
                type="radio"
                name="theme"
                id="light-context"
                onClick={handleTheme}
                value="light"
            />
            <label htmlFor="light-context">Claro</label>
            <input
                type="radio"
                name="theme"
                id="dark-context"
                onClick={handleTheme}
                value="dark"
            />
            <label htmlFor="dark-context">Oscuro</label>
            <button onClick={handleAuth}>{auth ? "Logout" : "Login"}</button>
        </div>
    )
}
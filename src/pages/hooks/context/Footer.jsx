import { useContext } from "react";
import ThemeContext from "./ThemeContext";

export default function FooterContext() {

    const { theme } = useContext(ThemeContext);

    return (
        <div className={theme}>
            <h3>Footer</h3>
        </div>
    )
}
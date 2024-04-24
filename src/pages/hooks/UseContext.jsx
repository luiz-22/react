import "./context/styles.css"
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import Header from "./context/Header"
import Main from "./context/Main"
import Footer from "./context/Footer"

export default function UseContext() {

    return (
        <>
            <h1>useContext()</h1>

            <p>
                El context provee una forma de pasar datos a través del árbol de
                componentes sin tener que pasar <code>props</code> manualmente en cada
                nivel. Por cada temática que tengamos creemos un context. Un contexto
                tiene dos objetos, un proveedor (<code>Provider</code>) y un consumidor.{" "}
                <code>useContext</code> vendría a reemplazar al consumidor. El{" "}
                <code>Provider</code> no puede ir en el archivo donde consumamos el
                contexto.
            </p>

            <div className="context">
                <AuthProvider>
                    <ThemeProvider>
                        <Header />
                        <br />
                        <Main />
                        <br />
                        <Footer />
                    </ThemeProvider>
                </AuthProvider>
            </div>
        </>
    )
}
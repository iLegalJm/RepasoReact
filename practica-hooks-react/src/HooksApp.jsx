import { CalculosPesados } from "./components/CalculosPesados"
import { CallbackComponent } from "./components/CallbackComponent"
import { ContadorComponent } from "./components/ContadorComponent"
import { FormularioComponent } from "./components/FormularioComponent"
import { ListaTareas } from "./components/ListaTareas"
import { UsuariosComponent } from "./components/UsuariosComponent"

export const HooksApp = () => {
    return (
        <>
            <h1>Aplicacion de Hooks</h1>
            <hr />
            <ListaTareas />
            <hr />
            <CallbackComponent />
            <hr />
            <CalculosPesados />
            <hr />
            <UsuariosComponent />
            <hr />
            <ContadorComponent />
            <hr />
            <FormularioComponent />

        </>
    )
}

import PropTypes from 'prop-types';
import { UsuarioContext } from "./usuarioContext"
import { useState } from 'react';

export const UsuarioProvider = ({ children }) => {
    const [usuario, setUsuario] = useState({})
    return (
        /* El código está creando un componente proveedor de contexto utilizando el componente `UsuarioContext.Provider`
        del módulo `usuarioContext`. */
        <UsuarioContext.Provider value={{ usuario, setUsuario }}>
            {children}
        </UsuarioContext.Provider>
    )
}

UsuarioProvider.propTypes = {
    children: PropTypes.node.isRequired
}

import PropTypes from 'prop-types';
import React from 'react';

export const Incrementar = React.memo(({ incrementar }) => {
    console.log("Me estoy renderizando :(");
    return (
        <button className="btn- btn-success" onClick={() => incrementar(5)}>+1</button>
    )
})

/* `Incrementar.displayName = 'Incrementar';` está configurando el nombre para mostrar del componente `Incrementar` en "Incrementar". Esto puede resultar útil para fines de depuración, ya que le permite identificar fácilmente el componente en React DevTools o los mensajes de error. */
Incrementar.displayName = 'Incrementar';

Incrementar.propTypes = {
    incrementar: PropTypes.func.isRequired
}

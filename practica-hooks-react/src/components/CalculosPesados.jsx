import { useMemo, useState } from "react";

export const CalculosPesados = () => {

    const [listaNumeros, setListaNumeros] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
    const [show, setShow] = useState(true);

    const useCalculo = (listaNumeros) => useMemo(() => {
        console.log("Calculando...");
        return listaNumeros.reduce((a, b) => a * b);
    }, [listaNumeros])

    const agregarNumero = () => {
        setListaNumeros([...listaNumeros, listaNumeros[listaNumeros.length - 1] + 1]);
    }

    return (
        <>
            <h1>Calculos Pesados</h1>
            <p>{useCalculo(listaNumeros)}</p>

            <button onClick={() => setShow(!show)}>{show ? 'Show' : 'Hide'}</button>
            <button onClick={() => agregarNumero()}>Agregar numero</button>
        </>
    )
}

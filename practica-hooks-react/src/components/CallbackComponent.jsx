import { useCallback, useState } from "react"
import { Incrementar } from "./Incrementar"

export const CallbackComponent = () => {

    const [counter, setCounter] = useState(0);

    const useIncrementarPadre = useCallback((val) => {
        setCounter(contador => contador + val);
    }, [])

    return (
        <>
            <h1>CallBack Component</h1>
            <h2>Contador: {counter}</h2>
            <Incrementar incrementar={useIncrementarPadre} />
        </>
    )
}

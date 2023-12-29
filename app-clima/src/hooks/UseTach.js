import { useEffect, useState } from "react"

export const UseTach = (url) => {
    const [state, setstate] = useState({
        data: null,
        isLoading: true,
        error: null
    })

    // console.log(state);

    useEffect(() => {
        const getFetch = async () => {
            if (!url) return
            try {
                const resp = await fetch(url);
                const data = await resp.json();
                setstate({
                    data,
                    isLoading: false,
                    error: null
                })
            } catch (error) {
                setstate({
                    data: null,
                    isLoading: false,
                    error
                })
            }
        }
        getFetch();
    }, [url])

    const { data, isLoading, error } = state;

    return {
        data,
        isLoading,
        error
    }
}

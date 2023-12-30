import { useState } from "react";

export const useFetchSolo = (url) => {
    console.log(url);
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        error: null
    })

    async () => {
        if (!url) return
        try {
            const resp = await fetch(url);
            const data = await resp.json();
            setState({
                data,
                isLoading: false,
                error: null
            })
        } catch (error) {
            setState({
                data: null,
                isLoading: false,
                error
            })
        }
    }

    const { data, isLoading, error } = state;

    return {
        data,
        isLoading,
        error
    }
}

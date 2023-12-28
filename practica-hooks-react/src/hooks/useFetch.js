import { useEffect, useState } from "react";

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        errors: null
    });
    useEffect(() => {
        const getFetch = async () => {
            if (!url) return;
            try {
                const resp = await fetch(url);
                const data = await resp.json();
                setState({
                    data,
                    isLoading: false,
                    errors: null
                });
            } catch (error) {
                setState({
                    data: null,
                    isLoading: false,
                    errors: error
                });
            }
        }
        getFetch();
    }, [url]);

    const { data, isLoading, error } = state;

    return {
        data,
        isLoading,
        error
    }
}

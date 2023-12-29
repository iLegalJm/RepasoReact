import { useState } from 'react';
export const useFetchClima = (urlBase, API_KEY) => {

    const [data, setData] = useState({
        dataClima: null,
        isLoading: true,
        error: null
    });

    const fetchData = async (ciudad) => {
        try {
            const resp = await fetch(`${urlBase}?q=${ciudad}&appid=${API_KEY}`);
            if (!resp.ok) {
                throw new Error(`HTTP error! status: ${resp.status}`);
            }
            const dataClima = await resp.json();
            setData({
                dataClima,
                isLoading: false,
                error: null
            });
        } catch (errors) {
            setData({
                dataClima: null,
                isLoading: false,
                error: errors
            });
        }
    }

    return { data, fetchData };
}


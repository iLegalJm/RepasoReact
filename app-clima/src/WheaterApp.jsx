import { useState } from "react";
import { useFetchClima } from "./hooks/useFetchClima";

export const WheaterApp = () => {

    const urlBase = import.meta.env.VITE_APP_URL_BASE;
    const API_KEY = import.meta.env.VITE_APP_API_KEY;

    const [ciudad, setCiudad] = useState('');
    const { data, fetchData } = useFetchClima(urlBase, API_KEY);
    const { dataClima, isLoading, error } = data;
    const difKelvin = 273.15;

    const handleCambioCiudad = (e) => {
        setCiudad(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        fetchData(ciudad);
    }

    return (
        <>
            <div className="container">
                <h1>Aplicación del Clima</h1>

                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Buscar ciudad"
                        value={ciudad} onChange={handleCambioCiudad} />
                    <button type="submit">Buscar</button>
                </form>
                {
                    isLoading ? <h4>Cargando...</h4>
                        : (error !== null)
                            ? <span>{error['stack']}</span>
                            :
                            <div className="card">
                                <h2>{dataClima.name}</h2>
                                <p>Condición metereológica: {dataClima.weather[0].description}</p>
                                <p>Temperatura: {parseInt(dataClima?.main?.temp - difKelvin)}</p>
                                <img src={`https://openweathermap.org/img/wn/${dataClima.weather[0].icon}@2x.png`} alt="" />
                            </div>
                }
            </div>
        </>
    )
}

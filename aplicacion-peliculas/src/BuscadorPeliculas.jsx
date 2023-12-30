import { useState } from "react"

export const BuscadorPeliculas = () => {

    const urlBase = "https://api.themoviedb.org/3/search/movie";
    const apiKey = "acf5472e45e436d5026bfd4c5e792981";

    const [busqueda, setBusqueda] = useState('');
    const [peliculas, setPeliculas] = useState([]);

    const handleInputChange = (e) => {
        setBusqueda(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(busqueda);
        fetchPeliculas();
        console.log(peliculas);
    }

    const fetchPeliculas = async () => {
        try {
            const response = await fetch(`${urlBase}?query=${busqueda}&api_key=${apiKey}`);
            if (response.status !== 200) {
                throw new Error('No se pudo realizar la petición');
            }
            const data = await response.json();
            setPeliculas(data);
            // console.log(peliculas);
        } catch (error) {
            console.error("Ha ocurrido un error:", error);
        }
    }

    return (
        <>
            <div className="container">
                <h1 className="title">Buscador de BuscadorPeliculas</h1>
                <form onSubmit={handleSubmit} >
                    <input type="text" placeholder="Escribir una peliculas"
                        value={busqueda} onChange={handleInputChange} />
                    <button type="submit" className="search-button">Buscar</button>
                </form>

                <div className="movie-list">
                    {peliculas.results && peliculas.results.map((pelicula) => {
                        return (
                            <div className="movie-card" key={pelicula.id}>
                                <img src={`https://image.tmdb.org/t/p/w300${pelicula.poster_path}`} alt={pelicula.title} />
                                <h2>{pelicula.title}</h2>
                                <p>{pelicula.overview}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

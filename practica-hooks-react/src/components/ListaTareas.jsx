import { useReducer } from "react";
import { useForm } from "../hooks/useForm";

const initialState = [
    {
        id: new Date().getTime(),
        tarea: 'Explicar reducers',
        finalizada: false
    }
]

const tareaReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case '[TAREAS] Agregar tarea':
            return [...state, action.payload];
        case '[TAREAS] Finalizar tarea':
            return state.map(tarea => (tarea.id === action.payload) ? { ...tarea, finalizada: !tarea.finalizada } : tarea);
        case '[TAREAS] Eliminar tarea':
            return state.filter(tarea => tarea.id !== action.payload);
        case '[TAREAS] Borrar tareas':
            return [];
        default:
            return state;
    }
}

export const ListaTareas = () => {
    const [tareasState, dispatch] = useReducer(tareaReducer, initialState);
    const { formState, onInputChange } = useForm({ tarea: '' })
    const { tarea } = formState;

    const agregarTarea = (e) => {
        e.preventDefault();
        if (tarea == "") return;
        const action = {
            type: '[TAREAS] Agregar tarea',
            payload: {
                id: new Date().getTime(),
                tarea: tarea,
                finalizada: false
            }
        }

        dispatch(action);
    }

    const finalizarTarea = ({ id }) => {
        console.log(id);
        const action = {
            type: '[TAREAS] Finalizar tarea',
            payload: id
        }
        dispatch(action);
        console.log(tareasState);
    }

    const eliminarTarea = ({ id }) => {
        console.log(id);
        const action = {
            type: '[TAREAS] Eliminar tarea',
            payload: id
        }
        dispatch(action);
    }

    const borarTareas = () => {
        const action = {
            type: '[TAREAS] Borrar tareas'
        }
        dispatch(action);
    }

    return (
        <>
            <h1>Use Reducer - Lista Tareas</h1>

            <form onSubmit={agregarTarea}>
                <div className="mb-3">
                    <label htmlFor="tarea" className="form-label">Ingresa nueva tarea</label>
                    <input
                        type="text"
                        className="form-control"
                        name="tarea"
                        aria-describedby="emailHelp"
                        placeholder="Ingrese una tarea"
                        onChange={onInputChange}
                        value={tarea}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                >Enviar</button>
                <button type="button" className="btn btn-danger"
                    onClick={borarTareas}
                >Reset</button>
            </form>

            {/* <br /> */}

            <ul className="list-group list-group-numbered">
                {tareasState.map(item => {
                    return (
                        <li className="list-group-item d-flex justify-content-between" key={item.id}>
                            <span>{item.tarea}</span>
                            <div>
                                <input
                                    type="checkbox"
                                    value={item.finalizada}
                                    onChange={() => finalizarTarea(item)}
                                />
                                <button className="btn btn-danger"
                                    onClick={() => eliminarTarea(item)}>Borrar</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

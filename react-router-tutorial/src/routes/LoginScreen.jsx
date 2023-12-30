import { useContext } from "react";
import { useForm } from "./hooks/useForm"
import { UsuarioContext } from "./context/usuarioContext";

export const LoginScreen = () => {

    const initialForm = {
        nombre: "",
        tecnologia: "",
        email: "",
        redes: ""
    }

    const { formState, onInputChange } = useForm(initialForm);

    const { nombre, tecnologia, email, redes } = formState;

    const { setUsuario } = useContext(UsuarioContext);

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(formState);
        setUsuario(formState);
    }

    return (
        <>
            <form className="max-w-sm mx-auto" onSubmit={onSubmit}>
                <div className="mb-5">
                    <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                    <input type="text" name="nombre" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@flowbite.com" value={nombre} onChange={onInputChange} required />
                </div>
                <div className="mb-5">
                    <label htmlFor="tecnologia" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input type="text" name="tecnologia" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@flowbite.com" required value={tecnologia} onChange={onInputChange} />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tecnología</label>
                    <input type="text" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required value={email} onChange={onInputChange} />
                </div>
                <div className="mb-5">
                    <label htmlFor="redes" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Redes</label>
                    <input type="text" name="redes" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required value={redes} onChange={onInputChange} />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Registrar usuario</button>
            </form>
        </>
    )
}

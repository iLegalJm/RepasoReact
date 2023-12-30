import { useContext } from "react"
import { UsuarioContext } from "./context/usuarioContext"

export const HomeScreen = () => {

    const { usuario } = useContext(UsuarioContext);

    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 :text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase :text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 bg-gray-50 :bg-gray-800">
                                Nombre
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Tecnología
                            </th>
                            <th scope="col" className="px-6 py-3 bg-gray-50 :bg-gray-800">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Redes
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-gray-200 :border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 :text-white :bg-gray-800">
                                {usuario.nombre}
                            </th>
                            <td className="px-6 py-4">
                                {usuario.tecnologia}
                            </td>
                            <td className="px-6 py-4 bg-gray-50 :bg-gray-800">
                                {usuario.email}
                            </td>
                            <td className="px-6 py-4">
                                {usuario.redes}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </>
    )
}

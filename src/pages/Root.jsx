import { Link } from "react-router-dom";
import routes from "../routes/routes.js";

const Root = () => {
    return (
        <div className="grid grid-rows-1 w-full max-w-5xl mx-auto p-4">
            {/* Sección de Texto a ASCII */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-4 md:mb-8">
                <h2 className="block font-bold text-lg my-2">Texto a ASCII</h2>
                <p className="text-gray-600 mb-4">Convierte cualquier texto en arte ASCII de forma rápida.</p>
                <Link to={routes.FromText}>
                    <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded transition duration-200 w-[160px]">
                        Convertir Texto
                    </button>
                </Link>
            </div>

            {/* Sección de Imagen a ASCII */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-4 md:mb-8">
                <h2 className="block font-bold text-lg my-2">Imagen a ASCII</h2>
                <p className="text-gray-600 mb-4">Convierte imágenes en arte ASCII con solo unos clics.</p>
                <Link to={routes.FromImage}>
                    <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded transition duration-200 w-[160px]">
                        Convertir Imagen
                    </button>
                </Link>
            </div>

            {/* Sección de GIF a ASCII */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-4 md:mb-8">
                <h2 className="block font-bold text-lg my-2">GIF a ASCII</h2>
                <p className="text-gray-600 mb-4">Extrae y convierte frames de GIFs a arte ASCII fácilmente.</p>
                <Link to={routes.FromGIF}>
                    <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded transition duration-200 w-[160px]">
                        Convertir GIF
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Root
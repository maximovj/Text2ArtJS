import { useState } from "react";
import routes from "../routes/routes";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
    const location = useLocation();
    const [showMenu, setShowMenu] = useState(true);

    const handleActiveLink = (route) => {
        return location.pathname === route ? 'after:w-full' : '';
    }

    return (
        <nav>
            <div className="flex flex-col rounded-lg gap-x-4 mt-1 p-4 items-center bg-slate-800 text-white lg:p-0 lg:flex-row">
                <Link to={routes.Root} className="rounded-l-lg py-4 px-4 lg:bg-gradient-to-b lg:from-red-500 lg:to-red-400">
                    <h3 className="text-3xl">Text2ArtJS</h3>
                </Link>
                <div className="text-center">
                    <button
                        onClick={() => setShowMenu((prev => !prev))}
                        className="bg-red-600 block w-full px-4 py-2 rounded-lg text-sm md:hidden">
                        Menú
                    </button>
                    <ul className={`flex flex-row items-center gap-x-1 transition-all duration-500 lg:flex-row p-4 lg:p-0
                    ${showMenu ? 'max-h-full max-w-[300px] overflow-x-auto whitespace-nowrap opacity-100' : 'max-h-0 max-w-[300px] overflow-x-auto whitespace-nowrap opacity-0'}
                    lg:max-w-full
                    `}>
                        {/* Home Link */}
                        <Link to={routes.Root} className={`py-4 px-2 relative after:content-[''] after:absolute after:w-0 after:h-1 after:bottom-0 after:left-0 after:bg-white hover:after:w-full after:transition-all after:duration-300 ${handleActiveLink(routes.Root)}`}>
                            <i>
                                Inicio
                            </i>
                        </Link>

                        {/* Desde Texto Link */}
                        <Link to={routes.FromText} className={`py-4 px-2 relative after:content-[''] after:absolute after:w-0 after:h-1 after:bottom-0 after:left-0 after:bg-white hover:after:w-full after:transition-all after:duration-300 ${handleActiveLink(routes.FromText)}`}>
                            <i>
                                Desde Texto
                            </i>
                        </Link>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;

import routes from "../routes/routes";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
    const location = useLocation();

    const handleActiveLink = (route) => {
        return location.pathname === route ? 'after:w-full' : '';
    }

    return (
        <nav>
            <div className="flex rounded-lg gap-x-4 mt-1 items-center bg-slate-800 text-white">
                <Link to={routes.Root}>
                    <h3 className="bg-gradient-to-b from-red-500 to-red-400 rounded-l-lg py-4 px-4 text-3xl">Text2ArtJS</h3>
                </Link>
                <ul className="flex gap-x-1">
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
        </nav>
    );
}

export default NavBar;

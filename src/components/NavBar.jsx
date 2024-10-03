import routes from "../routes/routes";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="py-2">
            <ul>
                <i><Link to={routes.Root}>Home</Link></i>
                <i><Link to={routes.FromText}>Desde Texto</Link></i>
            </ul>
        </nav>
    )
}

export default NavBar
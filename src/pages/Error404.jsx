import { Link } from "react-router-dom"
import routes from "../routes/routes.js";

const Error404 = () => {
    return (
        <div>
            <h1>Error404</h1>
            <h4>Página no encontrada</h4>
            <Link to={routes.Root}>Volver</Link>
        </div>
    )
}

export default Error404
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "../pages/Error404";
import routes from "./routes.js";
import FromText from "../pages/FromText.jsx";

const MainRoutes = () => {
    return (
        <BrowserRouter basename={routes.BaseName}>
            <Routes>
                <Route path={routes.Root} element={<h1>Página de root</h1>} />
                <Route path={routes.FromText} element={<FromText />} />
                <Route path={routes.Error404} element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MainRoutes
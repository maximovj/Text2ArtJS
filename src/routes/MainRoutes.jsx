import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "../pages/Error404";
import routes from "./routes.js";
import FromText from "../pages/FromText.jsx";
import LayoutApp from "../components/LayoutApp";
import FromImage from "../pages/FromImage.jsx";
import FromGIF from "../pages/FromGIF.jsx";

const MainRoutes = () => {
    return (
        <BrowserRouter basename={routes.BaseName}>
            <Routes>
                <Route path={routes.Root} element={<LayoutApp />}>
                    <Route path={routes.Root} element={<h1>Página de root</h1>} />
                    <Route path={routes.FromText} element={<FromText />} />
                    <Route path={routes.FromImage} element={<FromImage />} />
                    <Route path={routes.FromGIF} element={<FromGIF />} />
                    <Route path={routes.Error404} element={<Error404 />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default MainRoutes
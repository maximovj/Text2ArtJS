import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";


const LayoutApp = () => {
    return (<>
        <div className="container lg:w-11/12 mx-auto">
            <header className="mb-8">
                <NavBar />
            </header>
            <main className="h-screen">
                <Outlet />
            </main>
        </div>
        <footer>
            <p className="text-center py-4 bg-slate-800 text-white">Created by: Víctor J.</p>
        </footer>
    </>)
}

export default LayoutApp
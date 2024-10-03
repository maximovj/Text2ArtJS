import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const LayoutApp = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="container mx-auto mt-1">
                <NavBar />
            </header>
            <main className="flex-grow lg:m-8">
                <Outlet />
            </main>
            <footer>
                <p className="text-center py-4 bg-slate-800 text-white">Created by: Víctor J.</p>
            </footer>
        </div>
    );
};

export default LayoutApp
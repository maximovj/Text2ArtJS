import MainRoutes from "../routes/MainRoutes";
import routes from "../routes/routes";

const LayoutApp = () => {
    return (
        <div className="container mx-auto">
            <header className="py-2">
                <nav className="py-2">
                    <ul>
                        <i><a href={routes.Root}>Home</a></i>
                    </ul>
                </nav>
            </header>
            <main className="h-screen">
                <MainRoutes />
            </main>
            <footer>
                <p className="text-center py-4 bg-black text-white">Created by: Víctor J.</p>
            </footer>
        </div>
    )
}

export default LayoutApp
const FromText = () => {
    return (
        <div className="flex flex-col gap-10 md:items-center">
            <div className="border-2 rounded-md p-4 bg-white shadow-sm lg:w-min">
                <div className="flex flex-col justify-between gap-8 md:flex-row">
                    <form>
                        <div className="mb-4">
                            <label
                                htmlFor="text"
                                className="block  font-bold text-lg my-2">
                                Imagen a Arte ASCII
                            </label>
                            <input type="file" />

                            <small className=" block">Selecciona una imagen (.jpg / .png) Art ASCII</small>
                        </div>

                        <div className="mt-6">
                            <div className="flex justify-between">
                                <button className="bg-slate-800 py-2 px-4 rounded-md text-white">Generar</button>

                            </div>
                        </div>
                    </form>

                </div>
            </div>

            {/* Contenedor del arte ASCII */}
            <div className="mb-8 w-full " >
                <pre className="bg-gray-100 border overflow-auto rounded-md p-4 text-center h-[340px]">

                </pre>
            </div>

            {/*
            <div className="mb-4 w-full overflow-auto shadow-xl">
                <div className="p-4 bg-white  rounded-lg">
                    <pre className="whitespace-pre overflow-auto max-w-full h-[240px] text-center">
                        {art ? art : 'Ingrese un texto...'}
                    </pre>
                </div>
            </div>
            */}

            {/* 
            <div className="mt-4 w-full overflow-auto" >
                <pre className="bg-gray-100 border rounded-md p-4 text-center h-[340px]">
                    {art ? art : 'Ingrese un texto...'}
                </pre>
            </div>
            */}
        </div>
    )
}

export default FromText
import { useState } from "react";
import { useEffect } from "react";

import figlet from "figlet";

import standard from "figlet/importable-fonts/Standard.js";
figlet.parseFont("Standard", standard);
import ghost from "figlet/importable-fonts/Ghost.js";
figlet.parseFont("Ghost", ghost);
import _3d_ascii from "figlet/importable-fonts/3D-ASCII.js";
figlet.parseFont("3D-ASCII", _3d_ascii);

const FromText = () => {
    const [art, setArt] = useState('');
    const [text, setText] = useState('Hola mundo');

    const fncGenerateArt = (textToArt) => {
        figlet.text(
            textToArt.trim(),
            {
                font: "3D-ASCII",
                horizontalLayout: "controlled smushing",
                verticalLayout: "controlled smushing",
                width: text.length * 120,
                whitespaceBreak: true,
            },
            function (err, data) {
                setArt(data);
            }
        );
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (!text.trim()) {
            alert('El texto es obligatorio.');
            return;
        }

        fncGenerateArt(text.trim());
    }

    const handleBtnClean = () => {
        setArt('');
        setText('');
        fncGenerateArt('');
        alert('Arte limpiado.');
    }

    useEffect(() => {
        fncGenerateArt('Hola mundo');
    }, []);

    return (
        <div className="h-screen flex flex-col gap-10 items-center">
            <div className="border-2 rounded-md p-4 w-min bg-teal-600">
                <form onSubmit={handleOnSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="text"
                            className="block text-white">
                            Texto
                        </label>
                        <textarea
                            type="text"
                            id="text"
                            name="text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            className="block text-black px-2 py-2 rounded-md w-[400px] lg:w-[700px]">
                        </textarea>
                        <small className="text-white">Ingrese un texto para convertirlo a Art ASCII</small>
                    </div>
                    <div className="mb-4">
                        <div className="flex justify-between">
                            <button className="bg-slate-800 py-2 px-4 rounded-md text-white">Generar</button>
                            <button type="button" onClick={handleBtnClean} className="bg-slate-800 py-2 px-4 rounded-md text-white">Limpiar</button>
                        </div>
                    </div>
                </form>
            </div>

            {/* Contenedor del arte ASCII */}
            <div className="mt-4 mb-4 w-full overflow-auto shadow-xl">
                <div className="p-4 bg-white border-slate-900 border-2 text-black rounded-lg">
                    <pre className="whitespace-pre overflow-auto max-w-full h-[240px]">
                        {art}
                    </pre>
                </div>
            </div>
        </div>
    )
}

export default FromText
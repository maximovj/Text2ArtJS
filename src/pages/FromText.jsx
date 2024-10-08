import { useState } from "react";
import { useEffect } from "react";
import { useFiglet } from "../hooks/useFiglet";

const FromText = () => {
    const [art, setArt] = useState('');
    const [text, setText] = useState('Hola mundo');
    const [font, setFont] = useState('Standard');
    const { fonts, figlet } = useFiglet();

    const fncGenerateArt = (textToArt, fontArt) => {
        figlet.text(
            textToArt.trim(),
            {
                font: fontArt,
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

        fncGenerateArt(text.trim(), font.trim());
    }

    const handleBtnClean = () => {
        setArt('');
        setText('');
        fncGenerateArt('', font.trim());
        alert('Arte limpiado.');
    }

    const handleKeyDownEnter = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            fncGenerateArt(text, font.trim());
        }
    }

    useEffect(() => {
        fncGenerateArt(text, font);
    }, [font]);

    return (
        <div className="max-w-2xl mx-auto p-4">
            <div className="flex flex-col border-2 rounded-md p-4 bg-white shadow-sm mb-4">
                <div className="flex flex-col justify-between gap-8 md:flex-row">
                    <form onSubmit={handleOnSubmit}>
                        <div className="mb-4">
                            <label
                                htmlFor="text"
                                className="block font-bold text-lg my-2">
                                Texto a Arte ASCII
                            </label>
                            <textarea
                                type="text"
                                required
                                id="text"
                                name="text"
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                onKeyDown={handleKeyDownEnter}
                                placeholder="Ingrese un texto..."
                                className="block text-black px-2 py-2 border-2 rounded-md w-full h-[120px] resize-none md:w-[365px]">
                            </textarea>
                            <small className=" block">Ingrese un texto para convertirlo a Art ASCII</small>
                            <small className=" block">Presione Enter como atajo de teclado.</small>
                        </div>

                        <div className="mt-6">
                            <div className="flex justify-between">
                                <button className="bg-slate-800 hover:bg-slate-700 py-2 px-4 rounded-md text-white">Generar</button>
                                <button type="button" onClick={handleBtnClean} className="bg-slate-800 hover:bg-slate-700 py-2 px-4 rounded-md text-white">Limpiar</button>
                            </div>
                        </div>
                    </form>
                    <div className="mb-4">
                        <label htmlFor="font" className="block font-bold text-lg my-2">{fonts.length} Fuente ({font})</label>
                        <select
                            name="font"
                            id="font"
                            value={font}
                            onChange={(e) => {
                                setFont(e.target.value);
                            }}
                            size={fonts.length}
                            className="block w-full h-[100px] px-2 py-2 border-2 rounded-md lg:h-[220px] lg:md:w-[200px]">
                            {fonts.map(font => (
                                <option key={font.name} value={font.name}>{font.name}</option>
                            ))}
                        </select>
                        <small className=" block">Seleccione un tipo de fuente para el Arte ASCII.</small>
                    </div>
                </div>
            </div>

            {/* Contenedor del arte ASCII */}
            <div className="mb-8 w-full" >
                <pre className="bg-gray-100 border overflow-auto rounded-md p-4 text-center h-[340px]">
                    {art ? art : 'Ingrese un texto...'}
                </pre>
            </div>
        </div>
    )
}

export default FromText
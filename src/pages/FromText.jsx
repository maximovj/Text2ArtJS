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
        <div className="h-screen flex flex-col gap-10 items-center">
            <div className="border-2 rounded-md p-4 w-min bg-teal-600 shadow-sm">
                <div className="flex flex-col md:flex-row justify-between gap-8">
                    <form onSubmit={handleOnSubmit}>
                        <div className="mb-4">
                            <label
                                htmlFor="text"
                                className="block text-white font-bold text-lg my-2">
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
                                className="block text-black px-2 py-2 rounded-md w-[400px] h-[120px] resize-none lg:w-[400px]">
                            </textarea>
                            <small className="text-white block">Ingrese un texto para convertirlo a Art ASCII</small>
                            <small className="text-white block">Presione Enter como atajo de teclado.</small>
                        </div>

                        <div className="mb-4">
                            <div className="flex justify-between">
                                <button className="bg-slate-800 py-2 px-4 rounded-md text-white">Generar</button>
                                <button type="button" onClick={handleBtnClean} className="bg-slate-800 py-2 px-4 rounded-md text-white">Limpiar</button>
                            </div>
                        </div>
                    </form>
                    <div className="mb-4">
                        <label htmlFor="font" className="block text-white font-bold text-lg my-2">{fonts.length} Fuente ({font})</label>
                        <select
                            name="font"
                            id="font"
                            value={font}
                            onChange={(e) => {
                                setFont(e.target.value);
                            }}
                            size={fonts.length}
                            className="block w-full px-2 py-2 rounded-md h-[220px] md:w-[220px]">
                            {fonts.map(font => (
                                <option key={font.name} value={font.name}>{font.name}</option>
                            ))}
                        </select>
                        <small className="text-white block">Seleccione un tipo de fuente para el Arte ASCII.</small>
                    </div>
                </div>
            </div>

            {/* Contenedor del arte ASCII */}
            <div className="mb-4 w-full overflow-auto shadow-xl">
                <div className="p-4 bg-white border-slate-900 border-2 text-black rounded-lg">
                    <pre className="whitespace-pre overflow-auto max-w-full h-[240px] text-center">
                        {art ? art : 'Ingrese un texto...'}
                    </pre>
                </div>
            </div>
        </div>
    )
}

export default FromText
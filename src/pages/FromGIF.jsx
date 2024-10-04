import { useState, useRef } from 'react';
import { parseGIF, decompressFrames } from 'gifuct-js';

const asciiChars = '@%#*+=-:. '; // Caracteres ASCII para representar distintos niveles de brillo

const App = () => {
    const [imagePreview, setImagePreview] = useState(null);
    const [fontSize, setFontSize] = useState(1);
    const [lineHeight, setLineHeight] = useState(1);
    const [gifUrl, setGifUrl] = useState('');
    const [frames, setFrames] = useState([]);  // Aquí guardaremos los frames en ASCII
    const [gifFile, setGifFile] = useState(null); // Para almacenar el archivo GIF
    const canvasRef = useRef(null);

    // Función para convertir un frame a arte ASCII
    const imageToAscii = (imageData, width, height) => {
        const { data } = imageData;
        let asciiArt = '';

        for (let y = 0; y < height; y += 4) { // Salta algunos píxeles para mantener el tamaño reducido
            for (let x = 0; x < width; x += 2) { // Salta píxeles para reducir la densidad horizontal
                const index = (y * width + x) * 4;
                const r = data[index];
                const g = data[index + 1];
                const b = data[index + 2];
                const avg = (r + g + b) / 3; // Promedio para la luminosidad
                const asciiChar = asciiChars[Math.floor((avg / 255) * (asciiChars.length - 1))];
                asciiArt += asciiChar;
            }
            asciiArt += '\n'; // Nueva línea al final de cada fila
        }

        return asciiArt;
    };

    // Función para extraer los frames del GIF
    const extractFrames = async () => {

        if (!gifFile && !gifUrl) {
            alert("Sube una imagen o ingresa una URL...");
        }

        try {
            let buffer;

            // Verificar si se está utilizando un archivo o una URL
            if (gifFile) {
                // Leer el archivo GIF
                const reader = new FileReader();
                reader.onload = async (event) => {
                    buffer = event.target.result; // ArrayBuffer del archivo
                    processGif(buffer);
                };
                reader.readAsArrayBuffer(gifFile);
            } else if (gifUrl) {
                // Si se utiliza una URL, fetch el GIF
                const response = await fetch(gifUrl);
                buffer = await response.arrayBuffer();
                processGif(buffer);
            }
        } catch (error) {
            console.error("Error extracting frames: ", error);
        }
    };

    const processGif = (buffer) => {
        const gif = parseGIF(buffer);
        const decompressedFrames = decompressFrames(gif, true); // 'true' para usar ImageData

        const extractedFrames = decompressedFrames.map((frame) => {
            if (frame.width <= 0 || frame.height <= 0) {
                console.warn("Frame has invalid dimensions:", frame);
                return null; // Ignora frames inválidos
            }

            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            const { width, height } = frame.dims;
            console.log(`${width} X ${height}`);

            canvas.width = width;
            canvas.height = height;

            // Dibujar el frame en el canvas
            const imageData = new ImageData(new Uint8ClampedArray(frame.patch), width, height);
            ctx.putImageData(imageData, 0, 0);

            // Convertir el frame a ASCII
            return imageToAscii(ctx.getImageData(0, 0, width, height), width, height);
        }).filter(Boolean); // Filtra los frames nulos

        setFrames(extractedFrames); // Guardar los frames ASCII
    };

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-6">Extractor de Frames de GIF a ASCII</h1>

            {/* Contenedor flex para las tarjetas */}
            <div className="flex flex-col bg-white p-6 mb-4">
                <div className="flex gap-x-8 mb-1">
                    {/* Tarjeta para la carga de imagen */}
                    <div className="bg-white w-full ">
                        <h2 className="text-xl font-semibold mb-4">Frames ({frames.length})</h2>
                        {imagePreview ? (
                            <div className="my-4">
                                <img src={imagePreview} alt="Preview" className="max-w-full h-auto rounded-md lg:w-full lg:h-[200px]" />
                            </div>
                        ) : (
                            <div className="my-4">
                                <div className="max-w-full h-[120px] rounded-md bg-slate-200 border-2 sm:h-[200px] lg:w-full"></div>
                            </div>
                        )}
                    </div>

                    {/* Tarjeta para ajustes de tamaño */}
                    <div className="bg-white w-full ">
                        <h2 className="text-xl font-semibold mb-4">Ajustes de Tamaño</h2>
                        <div className="mb-4">
                            <label className="block">Anchura: {fontSize}</label>
                            <input
                                type="range"
                                min={0.1}
                                step={0.1}
                                max={5}
                                value={fontSize}
                                onChange={(e) => setFontSize(e.target.value)}
                                className="w-full"
                            />
                        </div>
                        <div>
                            <label className="block">Altura: {lineHeight}</label>
                            <input
                                type="range"
                                min={0.1}
                                step={0.1}
                                max={5}
                                value={lineHeight}
                                onChange={(e) => setLineHeight(e.target.value)}
                                className="w-full"
                            />
                        </div>
                        <small className="block mt-4 text-[12px] text-neutral-400">El tamaño generador a Arte ASCII es proporcional al tamaño de la imagen original</small>
                    </div>
                </div>

                {/* Input para seleccionar un archivo GIF */}
                <input
                    type="file"
                    accept="image/gif"
                    onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                            const imageSrc = URL.createObjectURL(file);
                            setFontSize(1);
                            setLineHeight(1);
                            setImagePreview(imageSrc);
                            setGifFile(e.target.files[0]);
                            setGifUrl(''); // Limpiar URL si se selecciona un archivo
                        }

                    }}
                    className="mb-4 p-2 border border-gray-300 rounded"
                />

                {/* Input para URL (opcional) */}
                <input
                    type="text"
                    value={gifUrl}
                    onChange={(e) => {
                        setGifUrl(e.target.value);
                        setGifFile(null); // Limpiar archivo si se introduce una URL
                    }}
                    placeholder="Introduce la URL del GIF"
                    className="mb-4 p-2 border border-gray-300 rounded"
                />

                <button
                    onClick={extractFrames}
                    className="bg-slate-800 hover:bg-slate-700 mb-4 px-4 py-2 text-white rounded"
                >
                    Extraer frames
                </button>
            </div>

            <canvas ref={canvasRef} className="hidden" />

            <div className="grid grid-cols-1 gap-4">
                {frames.map((frame, index) => (
                    <div key={index} style={{ fontFamily: 'monospace', fontSize: `${fontSize}px`, lineHeight: `${lineHeight}px` }}>
                        <pre className="whitespace-pre p-2 bg-gray-100 border rounded overflow-auto">
                            {frame}
                        </pre>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;

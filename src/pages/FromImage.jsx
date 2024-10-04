import { useState, useRef } from 'react';

const ImageToASCII = () => {
    const [asciiArt, setAsciiArt] = useState('');
    const [loading, setLoading] = useState(false);
    const [fontSize, setFontSize] = useState(1);
    const [lineHeight, setLineHeight] = useState(1);
    const [imagePreview, setImagePreview] = useState(null);
    const canvasRef = useRef(null);
    const asciiChars = '@#%8&WMZ?+~:,. ';

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImagePreview(URL.createObjectURL(file));
            setLoading(true);
            const image = new Image();
            image.src = URL.createObjectURL(file);

            image.onload = () => {
                const canvas = canvasRef.current;
                const ctx = canvas.getContext('2d');
                const targetWidth = 640;
                const scaleWidth = image.width > targetWidth ? targetWidth : image.width;
                const scaleHeight = (image.height / image.width) * scaleWidth;

                canvas.width = scaleWidth;
                canvas.height = scaleHeight;
                ctx.drawImage(image, 0, 0, scaleWidth, scaleHeight);

                const imageData = ctx.getImageData(0, 0, scaleWidth, scaleHeight);
                const pixels = imageData.data;

                let ascii = '';
                for (let i = 0; i < pixels.length; i += 4) {
                    const r = pixels[i];
                    const g = pixels[i + 1];
                    const b = pixels[i + 2];
                    const brightness = (r + g + b) / 3;
                    const asciiIndex = Math.floor((brightness / 255) * (asciiChars.length - 1));
                    ascii += asciiChars[asciiIndex];

                    if ((i / 4 + 1) % scaleWidth === 0) {
                        ascii += '\n';
                    }
                }

                setAsciiArt(ascii);
                setLoading(false);
            };
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-6">Convert Image to ASCII Art</h1>

            {/* Contenedor flex para las tarjetas */}
            <div className="flex justify-between mb-4">
                {/* Tarjeta para la carga de imagen */}
                <div className="bg-white shadow-md rounded-lg p-6 w-full mr-2">
                    {imagePreview ? (
                        <div className="my-4">
                            <img src={imagePreview} alt="Preview" className="max-w-full h-auto rounded-md lg:w-full lg:h-[200px]" />
                        </div>
                    ) : (<div className="my-4">
                        <div className="max-w-full h-[120px] rounded-md bg-slate-200 border-2 sm:h-[200px] lg:w-full"></div>
                    </div>)}
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="my-4 w-full text-center border border-gray-300 rounded-md p-2"
                    />
                    <small className="text-xs">El tamaño generador a Arte ASCII es proporcional al tamaño de la imagen original</small>
                </div>

                {/* Tarjeta para ajustes de tamaño */}
                <div className="bg-white shadow-md rounded-lg p-6 w-full ml-2">
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
                </div>
            </div>

            <canvas ref={canvasRef} className="hidden"></canvas>

            {/* Contenedor para el arte ASCII */}
            <div className='bg-gray-100 border overflow-auto rounded-md p-4 h-[560px]'>
                <div style={{ fontFamily: 'monospace', fontSize: `${fontSize}px`, lineHeight: `${lineHeight}px`, }}>
                    {loading ? (
                        <p className="text-center text-lg">Cargando...</p>
                    ) : (
                        <pre className="whitespace-pre-wrap text-black">
                            {asciiArt ? asciiArt : <small className='text-gray-600 text-center text-lg'>Sube una imagen ...</small>}
                        </pre>
                    )}
                </div>
            </div>

            {/* Botón para descargar el arte ASCII */}
            {asciiArt && (
                <div className="text-center mt-4">
                    <button
                        onClick={() => {
                            const blob = new Blob([asciiArt], { type: 'text/plain' });
                            const url = URL.createObjectURL(blob);
                            const a = document.createElement('a');
                            a.href = url;
                            a.download = 'ascii-art.txt';
                            a.click();
                            URL.revokeObjectURL(url);
                        }}
                        className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-700 transition duration-200"
                    >
                        Descargar ASCII Art
                    </button>
                </div>
            )}
        </div>
    );
};

export default ImageToASCII;

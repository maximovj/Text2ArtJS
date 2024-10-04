import { useState, useRef } from 'react';

const ImageToASCII = () => {
    const [asciiArt, setAsciiArt] = useState('');
    const [loading, setLoading] = useState(false);
    const [fontSize, setFontSize] = useState(1);
    const [lineHeight, setLineHeight] = useState(1);
    const [imagePreview, setImagePreview] = useState(null);
    const [imageUrl, setImageUrl] = useState(''); // Estado para la URL de la imagen
    const canvasRef = useRef(null);
    const asciiChars = '@#%8&WMZ?+~:,. ';

    // Función que maneja la lógica de la conversión a ASCII desde un archivo o URL
    const handleImageUpload = (imageSource) => {
        setLoading(true);
        const image = new Image();
        image.crossOrigin = "Anonymous";  // Añadir CORS
        image.src = imageSource;

        image.onload = () => {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            const targetWidth = 640;
            const scaleWidth = image.width > targetWidth ? targetWidth : image.width;
            const scaleHeight = (image.height / image.width) * scaleWidth;

            canvas.width = scaleWidth;
            canvas.height = scaleHeight;
            ctx.drawImage(image, 0, 0, scaleWidth, scaleHeight);

            try {
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
            } catch (error) {
                console.error('Error al obtener la imagen:', error);
            } finally {
                setLoading(false);
            }
        };

        image.onerror = () => {
            console.error('Error al cargar la imagen.');
            setLoading(false);
        };
    };

    // Manejador de archivos locales
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageSrc = URL.createObjectURL(file);
            setFontSize(1);
            setLineHeight(1);
            setImagePreview(imageSrc);
            handleImageUpload(imageSrc);
        }
    };

    // Manejador de imágenes desde URL
    const handleUrlSubmit = () => {
        if (imageUrl) {
            setFontSize(1);
            setLineHeight(1);
            setImagePreview(imageUrl);
            handleImageUpload(imageUrl);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-6">Convert Image to ASCII Art</h1>

            {/* Contenedor flex para las tarjetas */}
            <div className="flex flex-col bg-white p-6 mb-4">
                <div className="flex gap-x-8 mb-1">
                    {/* Tarjeta para la carga de imagen */}
                    <div className="bg-white w-full ">
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

                {/* Input para cargar archivos */}
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="mb-2 w-full text-center border border-gray-300 rounded-md p-2"
                />

                {/* Input para URL */}
                <input
                    type="text"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    placeholder="Ingresa una URL de imagen"
                    className="mb-2 w-full text-center border border-gray-300 rounded-md p-2"
                />

                <button
                    onClick={handleUrlSubmit}
                    className="bg-slate-800 text-white rounded-md py-2 px-4 hover:bg-slate-700 transition duration-200 w-full"
                >
                    Convertir desde URL
                </button>
            </div>

            <canvas ref={canvasRef} className="hidden"></canvas>

            {/* Contenedor para el arte ASCII */}
            <div className="bg-gray-100 border overflow-auto rounded-md p-4 h-[560px]">
                <div style={{ fontFamily: 'monospace', fontSize: `${fontSize}px`, lineHeight: `${lineHeight}px` }}>
                    {loading ? (
                        <p className="text-center text-lg">Cargando...</p>
                    ) : (
                        <pre className="whitespace-pre-wrap text-black">
                            {asciiArt ? asciiArt : <small className="text-gray-600 text-center text-lg">Sube una imagen o ingresa una URL...</small>}
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

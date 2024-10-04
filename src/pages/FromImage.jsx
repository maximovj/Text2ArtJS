import { useState } from 'react';
import { useImageToAscii } from '../hooks/useImageToAscii';

const ImageToASCII = () => {
    const [fontSize, setFontSize] = useState(1);
    const [lineHeight, setLineHeight] = useState(1);
    const [imagePreview, setImagePreview] = useState(null);
    const [imageUrl, setImageUrl] = useState(''); // Estado para la URL de la imagen
    const { asciiArt, loading, handleImageUpload, Canvas } = useImageToAscii();

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
            {/* Contenedor flex para las tarjetas */}
            <div className="flex flex-col border-2 rounded-md p-4 bg-white shadow-sm mb-4">
                <div className="flex gap-x-8 mb-1">
                    {/* Tarjeta para la carga de imagen */}
                    <div className="bg-white w-full ">
                        <label
                            htmlFor="text"
                            className="block font-bold text-lg my-2">
                            Imagen a Arte ASCII
                        </label>
                        {imagePreview ? (
                            <div className="my-2">
                                <img src={imagePreview} alt="Preview" className="max-w-full h-auto rounded-md lg:w-full lg:h-[200px]" />
                            </div>
                        ) : (
                            <div className="my-2">
                                <div className="max-w-full h-[120px] rounded-md bg-slate-200 border-2 sm:h-[200px] lg:w-full"></div>
                            </div>
                        )}
                    </div>

                    {/* Tarjeta para ajustes de tamaño */}
                    <div className="bg-white w-full">
                        <h2 className="block font-bold text-lg my-2">Ajustes de Tamaño</h2>
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
                    className="mb-4 p-2 border border-gray-300 rounded"
                />

                {/* Input para URL */}
                <input
                    type="text"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    placeholder="Ingresa una URL de imagen"
                    className="mb-4 p-2 border border-gray-300 rounded"
                />

                <button
                    onClick={handleUrlSubmit}
                    className="bg-slate-800 hover:bg-slate-700 text-white rounded-md py-2 px-4 transition duration-200 w-full"
                >
                    Convertir desde URL
                </button>
            </div>

            <Canvas></Canvas>

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

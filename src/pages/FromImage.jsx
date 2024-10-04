import { useState, useRef } from 'react';

const ImageToASCII = () => {
    const [asciiArt, setAsciiArt] = useState('');
    const [loading, setLoading] = useState(false);
    const [fontSize, setFontSize] = useState(1);
    const [lineHeight, setLineHeight] = useState(1);
    const canvasRef = useRef(null);

    // Tabla de caracteres ASCII ordenados por "densidad"
    const asciiChars = '@#%8&WMZ?+~:,. ';

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const image = new Image();
            image.src = URL.createObjectURL(file);

            image.onload = () => {
                const canvas = canvasRef.current;
                const ctx = canvas.getContext('2d');

                // Definir el tamaño objetivo del canvas (640x400)
                const targetWidth = 640;
                //const targetHeight = 640;

                // Escalar la imagen a 640x400 manteniendo las proporciones
                const scaleWidth = image.width > targetWidth ? targetWidth : image.width;
                const scaleHeight = (image.height / image.width) * scaleWidth;

                canvas.width = scaleWidth;
                canvas.height = scaleHeight;

                // Dibujar la imagen en el canvas con las dimensiones reducidas
                ctx.drawImage(image, 0, 0, scaleWidth, scaleHeight);

                // Obtener los datos de los píxeles
                const imageData = ctx.getImageData(0, 0, scaleWidth, scaleHeight);
                const pixels = imageData.data;

                // Convertir los píxeles a ASCII
                let ascii = '';
                for (let i = 0; i < pixels.length; i += 4) {
                    const r = pixels[i];
                    const g = pixels[i + 1];
                    const b = pixels[i + 2];

                    // Calcular el brillo del píxel
                    const brightness = (r + g + b) / 3;
                    const asciiIndex = Math.floor((brightness / 255) * (asciiChars.length - 1));
                    ascii += asciiChars[asciiIndex];

                    // Insertar un salto de línea al final de cada fila
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
        <div className="text-center">
            <h1 className="text-2xl font-bold">Convert Image to ASCII Art</h1>
            <input type="file" accept="image/*" onChange={handleImageUpload} className="my-4" />
            <div>
                <label htmlFor="" className="block">Anchura: {fontSize}</label>
                <input type="range" min={0.1} step={0.1} max={5} value={fontSize} onChange={(e) => setFontSize(e.target.value)} />
            </div>

            <div>
                <label htmlFor="" className="block">Altura: {lineHeight}</label>
                <input type="range" min={0.1} step={0.1} max={5} value={lineHeight} onChange={(e) => setLineHeight(e.target.value)} />
            </div>

            <canvas ref={canvasRef} className="hidden"></canvas>

            {/* Aplicar un tamaño de fuente para que el arte ASCII se vea proporcionado */}
            <div className='bg-gray-100 border overflow-auto rounded-md p-4  h-[560px]'>
                <div style={{ fontFamily: 'monospace', fontSize: `${fontSize}px`, lineHeight: `${lineHeight}px`, }}>
                    {loading ? <p>Loading...</p> : <pre>{asciiArt ? asciiArt : <small className='text-black text-2xl text-center'>Sube una imagen por favor</small>}</pre>}
                </div>
            </div>
        </div>
    );
};

export default ImageToASCII;

import { useState, useRef } from 'react';

const asciiChars = ['@', '#', 'S', '%', '?', '*', '+', ';', ':', ',', '.']; // Ejemplo de caracteres ASCII

export const useImageToAscii = () => {
    const [asciiArt, setAsciiArt] = useState('');
    const [loading, setLoading] = useState(false);
    const canvasRef = useRef(null); // Para el canvas donde se procesará la imagen

    const handleImageUpload = (imageSource) => {
        setLoading(true);
        const image = new Image();
        image.crossOrigin = 'Anonymous'; // Añadir CORS
        image.src = imageSource;

        image.onload = () => {
            const canvas = canvasRef.current;
            if (!canvas) return;

            const ctx = canvas.getContext('2d');
            if (!ctx) return;

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
                setLoading(false);
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

    // Componente del canvas
    const Canvas = () => <canvas ref={canvasRef} style={{ display: 'none' }} />;

    return { asciiArt, loading, handleImageUpload, Canvas };
};

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'; // Se importa estilos globales
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

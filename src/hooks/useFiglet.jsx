import { useEffect } from "react";
import figlet from "figlet";
import _Standard from "figlet/importable-fonts/Standard.js";
import _Ghost from "figlet/importable-fonts/Ghost.js";
import _3D_ASCII from "figlet/importable-fonts/3D-ASCII.js";
import _Alpha from "figlet/importable-fonts/Alpha.js";
import _Avatar from "figlet/importable-fonts/Avatar.js";
import _Big from "figlet/importable-fonts/Big.js";
import _Blocks from "figlet/importable-fonts/Blocks.js";
import _Bulbhead from "figlet/importable-fonts/Bulbhead.js";
import _Cards from "figlet/importable-fonts/Cards.js";
import _Doom from "figlet/importable-fonts/Doom.js";
import _Epic from "figlet/importable-fonts/Epic.js";
import _Graceful from "figlet/importable-fonts/Graceful.js";
import _Graffiti from "figlet/importable-fonts/Graffiti.js";
import _Impossible from "figlet/importable-fonts/Impossible.js";
import _Merlin1 from "figlet/importable-fonts/Merlin1.js";
import _Modular from "figlet/importable-fonts/Modular.js";
import _Ogre from "figlet/importable-fonts/Ogre.js";
import _Rectangles from "figlet/importable-fonts/Rectangles.js";
import _Slant from "figlet/importable-fonts/Slant.js";
import _Soft from "figlet/importable-fonts/Soft.js";
import _Sub_Zero from "figlet/importable-fonts/Sub-Zero.js";
import _Sweet from "figlet/importable-fonts/Sweet.js";
import _Train from "figlet/importable-fonts/Train.js";
import _Twisted from "figlet/importable-fonts/Twisted.js";
import _Varsity from "figlet/importable-fonts/Varsity.js";
import _Bloody from "figlet/importable-fonts/Bloody.js";
import _Bear from "figlet/importable-fonts/Bear.js";
import _Bell from "figlet/importable-fonts/Bell.js";
import _Crawford from "figlet/importable-fonts/Crawford.js";
import _Cricket from "figlet/importable-fonts/Cricket.js";
import _Digital from "figlet/importable-fonts/Digital.js";
import _Fraktur from "figlet/importable-fonts/Fraktur.js";
import _Fuzzy from "figlet/importable-fonts/Fuzzy.js";
import _Ghoulish from "figlet/importable-fonts/Ghoulish.js";
import _Glenyn from "figlet/importable-fonts/Glenyn.js";
import _Goofy from "figlet/importable-fonts/Goofy.js";
import _Gothic from "figlet/importable-fonts/Gothic.js";
import _Greek from "figlet/importable-fonts/Greek.js";
import _Hollywood from "figlet/importable-fonts/Hollywood.js";
import _Invita from "figlet/importable-fonts/Invita.js";
import _Italic from "figlet/importable-fonts/Italic.js";
import _Ivrit from "figlet/importable-fonts/Ivrit.js";
import _Jacky from "figlet/importable-fonts/Jacky.js";
import _Jazmine from "figlet/importable-fonts/Jazmine.js";
import _Jerusalem from "figlet/importable-fonts/Jerusalem.js";
import _Keyboard from "figlet/importable-fonts/Keyboard.js";
import _Merlin2 from "figlet/importable-fonts/Merlin2.js";
import _Mirror from "figlet/importable-fonts/Mirror.js";
import _Pawp from "figlet/importable-fonts/Pawp.js";
import _Poison from "figlet/importable-fonts/Poison.js";
import _Puffy from "figlet/importable-fonts/Puffy.js";
import _Puzzle from "figlet/importable-fonts/Puzzle.js";
import _Rounded from "figlet/importable-fonts/Rounded.js";
import _Serifcap from "figlet/importable-fonts/Serifcap.js";
import _Shadow from "figlet/importable-fonts/Shadow.js";
import _Speed from "figlet/importable-fonts/Speed.js";
import _Stforek from "figlet/importable-fonts/Stforek.js";
import _Stop from "figlet/importable-fonts/Stop.js";
import _Wavy from "figlet/importable-fonts/Wavy.js";

// Custom Hook para cargar fuentes y devolver figlet
export const useFiglet = () => {

    // Array de fuentes
    const fonts = [
        { name: "Standard", module: _Standard },
        { name: "Ghost", module: _Ghost },
        { name: "3D-ASCII", module: _3D_ASCII },
        { name: "Avatar", module: _Avatar },
        //{ name: "Alpha", module: _Alpha },
        { name: "Big", module: _Big },
        //{ name: "Blocks", module: _Blocks },
        { name: "Bulbhead", module: _Bulbhead },
        { name: "Cards", module: _Cards },
        { name: "Doom", module: _Doom },
        { name: "Epic", module: _Epic },
        { name: "Graceful", module: _Graceful },
        { name: "Graffiti", module: _Graffiti },
        //{ name: "Impossible", module: _Impossible },
        { name: "Merlin1", module: _Merlin1 },
        { name: "Modular", module: _Modular },
        { name: "Ogre", module: _Ogre },
        { name: "Rectangles", module: _Rectangles },
        { name: "Slant", module: _Slant },
        { name: "Soft", module: _Soft },
        { name: "Sub_Zero", module: _Sub_Zero },
        //{ name: "Sweet", module: _Sweet },
        { name: "Train", module: _Train },
        { name: "Twisted", module: _Twisted },
        { name: "Varsity", module: _Varsity },
        { name: "Bloody", module: _Bloody },
        { name: "Bear", module: _Bear },
        { name: "Bell", module: _Bell },
        { name: "Crawford", module: _Crawford },
        { name: "Cricket", module: _Cricket },
        { name: "Digital", module: _Digital },
        //{ name: "Fraktur", module: _Fraktur },
        { name: "Fuzzy", module: _Fuzzy },
        { name: "Ghoulish", module: _Ghoulish },
        { name: "Glenyn", module: _Glenyn },
        { name: "Goofy", module: _Goofy },
        { name: "Gothic", module: _Gothic },
        { name: "Greek", module: _Greek },
        { name: "Hollywood", module: _Hollywood },
        { name: "Invita", module: _Invita },
        { name: "Italic", module: _Italic },
        { name: "Ivrit", module: _Ivrit },
        { name: "Jacky", module: _Jacky },
        { name: "Jazmine", module: _Jazmine },
        { name: "Jerusalem", module: _Jerusalem },
        { name: "Keyboard", module: _Keyboard },
        { name: "Merlin2", module: _Merlin2 },
        { name: "Mirror", module: _Mirror },
        { name: "Pawp", module: _Pawp },
        { name: "Poison", module: _Poison },
        { name: "Puffy", module: _Puffy },
        { name: "Puzzle", module: _Puzzle },
        { name: "Rounded", module: _Rounded },
        { name: "Serifcap", module: _Serifcap },
        { name: "Shadow", module: _Shadow },
        { name: "Speed", module: _Speed },
        { name: "Stforek", module: _Stforek },
        { name: "Stop", module: _Stop },
        { name: "Wavy", module: _Wavy },
    ];

    const loadFontsFromFiglet = () => {
        fonts.forEach(async (font) => {
            try {
                figlet.parseFont(font.name, font.module);
            } catch (error) {
                console.error(`Error cargando la fuente ${font.name}:`, error);
            }
        });
    }

    useEffect(() => {
        loadFontsFromFiglet();
    }, []); // Solo se ejecuta una vez al montar el componente

    return { fonts, figlet }; // Devuelve la instancia de figlet
};


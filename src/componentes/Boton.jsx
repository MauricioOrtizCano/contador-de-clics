import React from "react";
import "../hojas-de-estilo/Boton.css";


export default function Boton({text, isClickButton, clickControl}) {

    return (
        <button
            className={ isClickButton ? "click-button" : "reset-button" }
            onClick={clickControl}
        >
            {text}
        </button>
    )
}
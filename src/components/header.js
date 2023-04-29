import React from "react";
import memedp from "../image/meme-dp.jpeg"
export default function Header() {
    return (
        <header className="header">
            <img src={memedp} alt="memedp" className="header--image" />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">react app #2</h4>
        </header>
    )
}
import React from 'react'
import { useState}  from 'react';
import memesData from "./data";
export default function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg",
    })
    const [allMemeImages, setAllMemeImages] = useState(memesData);


    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }
    return (
        <main>
            <div className="form">
                <input
                     type="text"
                     placeholder='Top Text'
                     className="form--input" 
                />
                <input
                     type="text"
                     placeholder='Bottom Text'
                     className="form--input" 
                />
                <button className="form--button"
                onClick={getMemeImage}>
                😜Get a new Meme Image 🖼️
                </button>
                <img src={memeImage} alt="" className='meme--image'/>
            </div>
        </main>
        
        
        )
}
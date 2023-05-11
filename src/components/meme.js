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
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url; 
        setMeme(prevMeme=> ({
            ...prevMeme,
            randomImage: url
        }))
    }
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">
                <input
                     type="text"
                     placeholder='Top Text'
                     className="form--input"
                     name= "topText"
                     value= {meme.toptext}
                     onChange={handleChange}
                />
                <input
                     type="text"
                     placeholder='Bottom Text'
                     className="form--input"
                     name= "bottomText"
                     value= {meme.bottomtext}
                     onChange={handleChange}
                />
                <button className="form--button"
                onClick={getMemeImage}>
                😜Get a new Meme Image 🖼️
                </button>
                    
                <div className="meme">
                <img src={meme.randomImage} alt="" className='meme--image'/>
                <h1 className="meme--text top">{meme.topText}</h1>
                <h1 className="meme--text bottom">{meme.bottomText}</h1>
                </div>
            </div>
        </main>
        
        
        )
}
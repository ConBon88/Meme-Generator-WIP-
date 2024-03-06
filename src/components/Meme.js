import React from "react"
import memesData from "../memesData"

export default function Meme()
{




     const [Meme, setMeme] =  React.useState({
        topText: "Top Text",
        bottomText: "Bottom Text",
        randomImage: "https://i.imgflip.com/26jxvz.jpg"
    })

    // const [allMemeImages, setallMemeImages] = React.useState(memesData)

    const [memeImage, setmemeImage] = React.useState("")

    function getMeme(event) {
        event.preventDefault(); // telling the browser not to perform the default form submission action, which prevents the page from reloading
        const memesArray = memesData.data.memes // assigns memes in array to memesArray
        const randomNumber = Math.floor(Math.random() * memesArray.length) //  randomNumber will be a random integer ranging from 0 to memesArray.length - 1, inclusive of 0 and exclusive of memesArray.length. 
        setmemeImage(memesArray[randomNumber].url) // retrieves the URL of the meme
        // const url = memesArray[randomNumber].url
        /** setMeme (prevMeme => ({
         * ...prevMeme, randomImage: url})) */
    }
    
  
    return(
        <div class = "main">

            <form class = "form">

                    <input
                        type = "Text"
                        placeholder = {Meme.topText}
                        class ="T-Text"
                     />
                    <input
                        type = "Text"
                        placeholder = {Meme.bottomText}
                        class = "B-Text"
                    />

                  
                
              
                <button class = "Generate" onClick = {getMeme}>
                    Get a new meme image 💡
                </button>

            </form>
            <img src = {memeImage} class = "meme--image"></img>  
            

        </div>
    )
    /** change to meme.randomImage */

}


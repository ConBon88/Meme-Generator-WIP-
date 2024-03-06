import React from "react"
import Logo from "../images/logo-design-49572.png"

export default function Header()
{
    return(
        <div class = "Top-Box">
            <img src = {Logo} class = "Top-Image"></img>
            <h2 class = "Top-Title">Meme Generator</h2>
            <h3 class = "Top-React">React Course - Project 3</h3>
        </div>
    )
}
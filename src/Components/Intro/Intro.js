import React from "react";
import "./Intro.css"
import Twitter from "./twittericon.png"
import Linkedin from "./linkedin.png"

export default function Intro(){
    return(
       <div className="intro">
           <h1>React</h1>
           <h2>A JavaScript library for building user interfaces</h2>
           <div className="logos">
            <img src={Twitter}/>
            <img src={Linkedin}/>
           </div>
           <div className="introbutton">
             <button>Get Started</button>
             <h3>Take the Tutorial  &#10148;</h3>
           </div>
           
       </div>

    )
}
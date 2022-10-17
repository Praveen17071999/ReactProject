import React from "react";
import "./Body.css"
import "./Simple.png"

export default function Body(props){
    
    return(   //226620
      <>
        <div className="maincontainer">
            <h1 className="font-effect-anaglyph">{props.sample.heading}</h1>
            <div>
            <p>{props.sample.description}</p>
            </div>
        </div>
        
      </>  
      )
  }
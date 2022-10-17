import React, { useState } from "react";
import ReactLogo from "./React-icon.svg.png"
import "./Header.css"

export default function Header(){
  let date = new Date().toLocaleDateString();//new Date().getDate()+"/"+new Date().getMonth()+"/"+new Date().getFullYear()
  let time = new Date().toLocaleTimeString();//new Date().getHours()+":"+new Date().getMinutes()+":"+ new Date().getSeconds()
  const [currentTime,setCurrentTime] = useState(time)
  const [currentDate,setCurrentDate] = useState(date)

  const updateTime=()=>{
    let time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  }

  const updateDate=()=>{
    let date= new Date().toLocaleDateString();
    setCurrentDate(date);
  }

  setInterval(updateTime,1000)
  setInterval(updateDate,1000)
    return(
      
      <header>
        <nav className="nav">
          <div className="navlogo-container">
            <img className="nav-logo" src={ReactLogo} alt="oops.."/>
            <h3>ReactFacts</h3>
          </div>
          
          <div className="date">
              <label>{currentDate}</label>
              <label>{currentTime}</label>
          </div>

          <ul className="nav-items">
            <li>Docs</li>
            <li>Tutorial</li>
            <li>Blog</li>
            <li>Community</li>
          </ul>
        </nav>
      </header>
    )
  }


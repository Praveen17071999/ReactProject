import './App.css';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer"
import Body from "./Components/Body/Body"
import React from 'react';
import Intro from "./Components/Intro/Intro"
import SampleData from './SampleData';

export default function App() {
  const bodyElements = SampleData.map(sample =>{
    return <Body key={sample.id} sample={sample}/>
  })
    return (
      <>
        <Header/>
        <Intro/>
        <div className='mainbody'>
          {bodyElements}
        </div>
        
        <Footer/>
      </> 
    )
}



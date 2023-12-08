import './App.css';
import React, { useState,useEffect} from 'react';
import Randomquotes from "../src/components/Randomquotes"
import quotesData from '../src/components/quotes.json';

function App() {

  const [qdata,setQdata] = useState({});
  const [color,setColor] = useState("");

  const handleColorChange = () => {
    const newColor = '#' + Math.floor(Math.random()*16777215).toString(16); // Generate a random color
    setColor(newColor);
    document.documentElement.style.color = newColor; // Set CSS variable
  };



  // const colorarray = ["#16a085","#77b1a9","#fb6964","#bdbb99","#9b59b6","#472e32","#2c3e50","#342224","#2c3e50","#73a857"]
  const Randomquotesgenerate = () => {
    const randomindex = Math.floor(Math.random() * quotesData.length);
    setQdata(quotesData[randomindex]);
    handleColorChange();
  };
  
  useEffect(
    ()=>{
      handleColorChange();
      Randomquotesgenerate();
    },[]
  )

  return (

    <div className="" style={{ backgroundColor: color }}>
      <Randomquotes quote={qdata.quote} author={qdata.author} onNewQuote={Randomquotesgenerate} color={color}/>
    </div>
  );
}



export default App;

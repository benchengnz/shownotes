import './App.css';
import Header from './components/header'; 
import React, { useState } from 'react';
import { FaHeart } from "react-icons/fa";

function App() {
  var options = [
    { key: "1", text: "how are you", ctext: "你好嗎" },
    { key: "2", text: "are you hungry", ctext: "你餓嗎" },
    { key: "3", text: "do you want to go to toilet", ctext: "你想去廁所嗎" },
    { key: "4", text: "feeling ok?", ctext: "你有沒不舒服嗎" },
  ];
  
  const [text, setText] = useState("type something");
  const [defaultfontsize, setFontSize] = useState(32);

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setText(event.target.value)
  }

  const handleIncreaseFont = () => {
    setFontSize( defaultfontsize + 2)
  }

  const handleDecreaseFont = () => {
    setFontSize(defaultfontsize - 2)
  }

  const handleSetText = (str) =>{
    setText(str);
  }

  const textStyle = {
    fontSize: defaultfontsize
  }

  
  return (
    <div className="App">
      <div className='Heading'>
        <Header selectedOption="1"
          options={options}
          setTextAction={handleSetText}
          increaseFontSize={handleIncreaseFont}
          descreaseFontSize={handleDecreaseFont}
          title={Date().slice(4, 15)} />
      </div>
      <div className='Content'>
        <div className='row'>
          <div className='col'>
            <textarea
              style={textStyle}
              className='mainText' onChange={handleInputChange}
              value={text}></textarea>
            <FaHeart/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

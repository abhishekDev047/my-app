import './App.css';

import Navbar from './components/Navbar';

import TextForm from './components/TextForm';

import About from './components/About';

import React, {useState} from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App(props) {
  const [mode, setmode] = useState('light');

// Darkmode
  const togglemode = ()=>{
    if(mode===`light`){
      setmode(`dark`);
      document.body.style.backgroundColor = '#333638';


    }
    else{
      setmode(`light`);
      document.body.style.backgroundColor = 'white';
    }
  };
  return (
    <>
     <Router>
      <Navbar title="Textutils" abouttext="About Us" mode={mode} togglemode={togglemode} />
      <div className="container">
      <Routes>
          <Route exact path="/about" element={ <About mode={mode}/>}>           
        </Route>
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} />}>  
          </Route>
         </Routes>
      </div>
     </Router>
    </>
  );
};

export default App;
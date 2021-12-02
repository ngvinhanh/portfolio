import React from 'react'

import GlobalStyles from "./components/GlobalStyles";
import MenuHeading from "./components/MenuHeading";
import Welcome from "./components/Welcome";
import CakeXou from "./components/CakeXou";
import SlideCakeXou from "./components/SlideCakeXou";
import Projets from "./components/Projets";
import Contact from "./components/Contact";
import Content from "./components/Content";


function App() {
  
  return (
    
      <GlobalStyles>
        <Content />
        <MenuHeading />
        <Welcome /> 
        <CakeXou /> 
        <SlideCakeXou />
        <Projets />
        <Contact />
      </GlobalStyles>
    
  );
}

export default App;

import React from "react";
//  Button from "./components/Button/Button.component";
import {useState} from "react";
// import Section from "./components/Section/Section.component";
import Header from "./components/Header/Header.component";
import Main from "./components/Main/Main.component";


export default function App() {

  return (
    <>
      <Header/>
      <Main/>
    </> 
  )

    // const [enter , setEnter] = useState(false)

    // const handleClick = () => {
    //   setEnter((prev) => !prev); 
    // }

    // return (
    //   <Header/>
    //   <Main/>
    //     // {/* <Button 
    //     //     onClick={(handleClick)} 
    //     //     text="Click me" 
    //     // />
    //     // <Section isOpen={enter}/> */}

    // );
  }
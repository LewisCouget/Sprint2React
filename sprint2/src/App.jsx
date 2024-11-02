import React, { useState } from "react";
import "../index.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Section from "./components/Section/Section";
const App = () => {
  return (
    <>
      <div className="grid-container">
        <Header />
        <Main />
        <Section />
      </div>
    </>
  );
};
export default App;

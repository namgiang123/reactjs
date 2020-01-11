import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopMenu from './Component/TopMenu/TopMenu.js';
import Header from './Component/Header/Header.js';
import Section from './Component/Section/Section.js';
import Footer from './Component/Footer/Footer.js';

function App() {
  return (
    <div className="_013">
      <TopMenu/>
      <Header/>
      <Section order="order-lg-2" image="img/01.jpg"/>
      <Section image="img/02.jpg"/>
      <Section order="order-lg-2" image="img/03.jpg"/>
      <Footer/>
    </div>
  );
}

export default App;

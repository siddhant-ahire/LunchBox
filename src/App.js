import './assets/css/style-starter.css';
import './App.css';
import Header from './components/Header/Header';
import React, { useState, useEffect } from 'react'
import Scroll from './Scroll'
import SmoothScroll from './smoothScroll/smoothScroll'
import Home from './pages/Home';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Menu from './pages/Menu';
import Prices from './pages/Prices';
import Order from './pages/Order';
import Pay from './pages/Pay';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

function App() {

  return (
    <>
      <Header />
      <Scroll showBelow={250} />
      {/* <SmoothScroll> */}
        <Router>
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/Menu"><Menu/></Route>
            <Route exact path="/Order"><Order/></Route>
            <Route exact path="/Prices"><Prices/></Route>
            <Route exact path="/Pay"><Pay/></Route>
            <Route exact path="/About"><AboutUs/></Route>
            <Route exact path="/Contact"><ContactUs/></Route>
          </Switch>
        </Router>
      {/* </SmoothScroll> */}
    </>
  );
}

export default App;

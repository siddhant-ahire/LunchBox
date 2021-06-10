import './assets/css/style-starter.css';
import './App.css';
import Header from './components/Header/Header';
import React from 'react'
import Scroll from './Scroll'
import Home from './pages/Home';
import { Route, Switch } from 'react-router-dom'
import Menu from './pages/Menu';
import Prices from './pages/Prices';
import Order from './pages/Order';
import Pay from './pages/Pay';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import ScrollToTop from './ScrollToTop';

function App() {


  return (
    <>
      <Header />
      <ScrollToTop />
      <Scroll showBelow={10} />
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/Menu"><Menu/></Route>
            <Route exact path="/Order"><Order/></Route>
            <Route exact path="/Prices"><Prices/></Route>
            <Route exact path="/Pay"><Pay/></Route>
            <Route exact path="/About"><AboutUs/></Route>
            <Route exact path="/Contact"><ContactUs/></Route>
          </Switch>
    </>
  );
}

export default App;

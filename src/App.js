import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import Footer from './components/Footer'
import Landing from './components/Landing'
import Menu from './components/Menu'
import History from './components/History'
import {BrowserRouter, Route} from 'react-router-dom'; 
import {Link} from 'react-router-dom'
import Sbackground from './components/Sbackground';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Landing}/>
      <Route exact path="/menu" component={Menu}/>
      <Route exact path="/history" component={History}/>
    </BrowserRouter>
     
     )
}


export default App;

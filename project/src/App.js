import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Database from './components/Database'; 
import PHistory from './components/History'; 
import About from './components/About'; 
import Navigation from './components/Navigation';
import ArtList from './components/ArtList';
import Login from './components/Login';
import SignUp from './components/SignUp';


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Route path="/" exact component={Home}></Route>
      <Route path="/Database" component={Database}></Route>
      <Route path="/Project-History" component={PHistory}></Route>
      <Route path="/About" component={About}></Route>
      <Route path="/Art-Collection" component={ArtList}></Route>
      <Route path="/Login" component={Login}></Route>
      <Route path="/Register" component={SignUp}></Route>
    </div>
  );
}

export default App;

import React from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

// components 
import Home from './components/Home';
import Database from './components/Database'; 
import PHistory from './components/History'; 
import About from './components/About'; 
import Navigation from './components/Navigation';
import ArtList from './components/ArtList';
import Login from './components/admin/Login';
import SignUp from './components/admin/SignUp';
import AdminHome from './components/admin/AdminHome';
import AddArtForm from './components/admin/AddArtForm';
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <div className="page-content">
      <Navigation/>
      <Route path="/" exact component={Home}></Route>
      <Route path="/Database" component={Database}></Route>
      <Route path="/Project-History" component={PHistory}></Route>
      <Route path="/About" component={About}></Route>
      <Route path="/Art-Collection" component={ArtList}></Route>
      <Route path="/Admin/Login" component={Login}></Route>
      <Route path="/Admin/Register" component={SignUp}></Route>
      <PrivateRoute path="/Admin" exact component={AdminHome} />
      <PrivateRoute path="/Admin/Add-Art" component={AddArtForm} />
      <PrivateRoute path="/Admin/Add-Category" component={AddArtForm} />
      <PrivateRoute path="/Admin/Add-Location" component={AddArtForm} />
      </div>
      <Footer/>
    </div>
  );
}

export default App;

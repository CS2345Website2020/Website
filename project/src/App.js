import React from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import './App.css';
import 'react-widgets/dist/css/react-widgets.css';

// public components 
import Home from './components/Home';
import Database from './components/Database'; 
import PHistory from './components/History'; 
import About from './components/About'; 
import Navigation from './components/Navigation';
import ArtList from './components/ArtList';
import Footer from './components/Footer';

// admin components 
import Login from './components/admin/Login';
import SignUp from './components/admin/SignUp';
import AdminHome from './components/admin/AdminHome';
import AddArtForm from './components/admin/AddArtForm';
import ArtistForm from './components/admin/ArtistForm';
import CategoryForm from './components/admin/CategoryForm';
import GeometryForm from './components/admin/GeometryForm';
import OwnerForm from './components/admin/OwnerForm';


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
        <PrivateRoute path="/Admin/Add-Artist" component={ArtistForm} />
        <PrivateRoute path="/Admin/Add-Category" component={CategoryForm} />
        <PrivateRoute path="/Admin/Add-Owner" component={OwnerForm} />
        <PrivateRoute path="/Admin/Add-Geometry" component={GeometryForm} />
      </div>
      <Footer/>
    </div>
  );
}

export default App;

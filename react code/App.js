import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Signup from "./components/pages/Users/register";
import Login from "./components/pages/Users/login"
import Forgot from './components/pages/Users/forgotPass';
import Google from './components/pages/Users/google';
import Facebook from './components/pages/Users/fb';
import Home from './components/pages/home';
import Map from './components/pages/googleMap';
import Category from './components/pages/category';
import ProductData from './components/pages/product';
import Oneproduct from './components/pages/onePro';
import Dashboard from './components/pages/Users/dashboard';
import Multer from './components/hookcom/multer';

function App() {
  return (
    <>
    {/* <Router>
      <Routes>
        <Route path='/' element ={<Login/>}/>
        <Route path='/forgot' element={<Forgot/>}/>
        <Route path='/signUp' element ={<Signup/>}/>
        <Route path='/google' element ={<Google/>}/>
        <Route path='/facebook' element={<Facebook/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/map' element={<Map/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route path='/product' element={<ProductData/>}/>
        <Route path='/product:id' element={<Oneproduct/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </Router> */}
    {/* <Signup/>
    <Login/> */}
    <Multer/>
    </>
  );
}

export default App;

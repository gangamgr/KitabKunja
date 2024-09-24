import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Page/Home';
import Layout from './Layout/Layout';
import Contact from './Page/Contact';
import Shop from './Page/Shop';
import About from './Page/About';


function App() {
  return (
    
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/about' element={<About/>}/>
          </Routes>
        </Layout>
      </Router>

    
  );
}

export default App;

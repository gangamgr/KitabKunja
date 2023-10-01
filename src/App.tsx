import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Page/Home';
import Toolbar from './Component/Toolbar';
import Footer from './Component/Footer';
import Flip from './Page/Flip';
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';


function App() {
  return (
    
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />}/>
          </Routes>
        </Layout>
      </Router>

    
  );
}

export default App;

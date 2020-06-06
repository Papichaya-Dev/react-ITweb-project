import React from 'react';

import Navbar from './components/Latout/Navbar';
import Footer from './components/Latout/Footer';
import Landing from './components/Latout/Landing'

import './App.css';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
   
    <Footer/>
    </div>
  );
}

export default App;

import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './Components/Home';
import UsMarket from './Components/UsMarket';
import IndianMarket from './Components/IndianMarket';
import Support from './Components/Support';
import './App.css';


const App = () => {
  return (
    <Router>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/UsMarket' element={<UsMarket/>} />
        <Route path='/IndianMarket' element={<IndianMarket/>} />
        <Route path='/Support' element={<Support/>} />
    </Routes>
  </Router>
  );
}

export default App;
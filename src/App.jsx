import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <div>
      {/* <h1>this is home page</h1> */}
      <Router>
        <Navbar/>
      </Router>
    
    </div>
  );
}

export default App;
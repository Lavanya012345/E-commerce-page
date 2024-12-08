import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Product  from './components/Produt';



function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        
        
      </Routes>
    </Router>
  );
}

export default App;

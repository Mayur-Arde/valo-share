import React from 'react';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
    <div className="pt-20">
      <Routes>
        <Route path="/" element={<Home/>} exact />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/login" element={<Login /> }/>
            <Route path="/register" element={<Register />}/>
        </Routes>
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;

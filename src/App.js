import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoadingWhenUser from './component/LoadingWhenUser';
import PrivateRoute from './component/UserRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { useDispatch, useSelector } from 'react-redux';


function App() {
  const { currentUser, err } = useSelector(state => state.user)
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
        <Routes>
            {/* <Route exact path="/" element={<Home />}/> */}
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
                       
            <Route path="/login" element={<Login /> }/>
            <Route path="/register" element={<Register />}/>
        </Routes>
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;

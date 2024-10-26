import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Pages/Home';
import Leaderboard from './Pages/Leaderboard';
import Login from './Pages/Login';
import Navbar from './Components/Navbar';
import MyProfile from './Pages/MyProfile';
import Popup from './Pages/Popup';

const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/leaderboard' element={<Leaderboard/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/my-profile' element={<MyProfile/>} />
        <Route path='/popup' element={<Popup/>} />
      </Routes>
    </div>
  );
}

export default App;
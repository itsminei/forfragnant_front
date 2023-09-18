import React from 'react';
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import Main from'./main'
import './App.css';
import Realtime from './componnents/rtsp';
import Realtime2 from './componnents/rtsp2'
import MainAdmin from './mainadmin'
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import SearchScreen from './componnents/SearchScreen';
import Train from './componnents/Train';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/realtime' element={<Realtime />}></Route>
          <Route path='/realtime2' element={<Realtime2 />}></Route>
          <Route path='/searchscreen' element={<SearchScreen />}></Route>
          <Route path='/admin' element={<MainAdmin />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/train' element={<Train />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homescreen from './pages/Homescreen';
import Navigation from './components/Navigation';
import VideoPopup from './components/VideoPopup';
import Browse from './pages/Browse';
import BrowseByGenre from './pages/BrowseByGenre';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Homescreen />}></Route>
        <Route path='/browse/:platform' element={<Browse />}/>
        <Route path='/browsebygenre/:platform/:genreid' element={<BrowseByGenre />}/>
      </Routes>
      <VideoPopup />
    </BrowserRouter>
  );
}

export default App;

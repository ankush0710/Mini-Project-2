import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faInstagram, faFacebook, faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faPlus, faPenToSquare, faTrash} from '@fortawesome/free-solid-svg-icons';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Players from './component/pages/Players';
import InputPage from './component/pages/InputPage';

function App() {
  library.add(faInstagram, faFacebook, faTwitter, faLinkedin, faPlus, faPenToSquare, faTrash);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Players />}/>
          <Route path='/Players' element={<Players />}/>
          <Route path='/Form' element={<InputPage />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

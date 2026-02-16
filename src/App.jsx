import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faInstagram, faFacebook, faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Players from './component/pages/Players';
import Cards from './component/pages/Cards';

function App() {
  library.add(faInstagram, faFacebook, faTwitter, faLinkedin);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Players />}/>
          <Route path='/Players' element={<Players />}/>
          <Route path='/Cards' element={<Cards />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

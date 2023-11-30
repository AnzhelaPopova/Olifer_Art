import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import PillowsBlankets from './components/PillowsBlankets/PillowsBlankets';
import Fancywork from './components/Fancywork/Fancywork';
import Contact from './components/Contact/Contact';
import Clean from './components/Clean/Clean';
import NewPillowsBlankets from './components/NewPillowsBlankets/NewPillowsBlankets';
import FAQItem from './components/FAQ/FAQItem';
import Gallery from './components/Gallery/Gallery'

import data from './components/FAQ/data.json'
import photos from './components/Gallery/photos.json'


export default function App() {

  const questions = data.questions;

  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/PillowsBlankets" element={<PillowsBlankets />} />
          <Route path="/NewPillowsBlankets" element={<NewPillowsBlankets />} />
          <Route path="/Fancywork" element={<Fancywork />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Clean" element={<Clean />} />
          <Route path="/Questions" element={<FAQItem questions={questions} />} />
          <Route path="/Gallery" element={
            photos.map((image) => (
              <Gallery
                image={image.image}
              />))} />

        </Routes>

        <Footer />
      </div>
    </BrowserRouter >
  );
}

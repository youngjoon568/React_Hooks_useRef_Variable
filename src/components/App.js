import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import "../components/css/main.css";
import CountUpOne from './view/CountUpOne';
import CountUpThree from './view/CountUpThree';
import CountUpTwo from './view/CountUpTwo';

export default function App() {

  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/countupone">CountUpOne</Link>
      <Link to="/countuptwo">CountUpTwo</Link>
      <Link to="/countupthree">CountUpThree</Link>
      <Routes>
        <Route path='/countupone' element={<CountUpOne />} />
        <Route path='/countuptwo' element={<CountUpTwo />} />
        <Route path='/countupthree' element={<CountUpThree />} />
      </Routes>
    </BrowserRouter>
  );
};
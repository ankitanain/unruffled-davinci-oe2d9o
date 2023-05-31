import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import SuggestedBooks from './component/SuggestedBooks';
import Typing from './component/Typing';
import Newbookupload from './component/Newbookupload';
import Home from './component/Home';

function App() {
  return (
    <div className="app-container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/uploadnewbook" element={<Newbookupload />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

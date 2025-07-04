import React, { Component } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';



export class App extends Component {
  apiKey=process.env.REACT_APP_NEWS_API
  // apiKey="02c817a482804442856a231fedb3eb31"
  // apiKey="21fc994dd6554016a0eeaf6a47b4a0de"
  render() {
    return (
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<News key="general" apiKey={this.apiKey}  category="general" />} />
          <Route exact path="/sports" element={<News key="sports" apiKey={this.apiKey} category="sports" />} />
          <Route exact path="/technology" element={<News key="technology" apiKey={this.apiKey} category="technology" />} />
          <Route exact path="/entertainment" element={<News key="entertainment" apiKey={this.apiKey} category="entertainment" />} />
          <Route exact path="/health" element={<News key="health" apiKey={this.apiKey} category="health" />} />
          <Route exact path="/about" element={<div className="container my-5"><h2>ℹ️ About Us</h2><p>This is a news app built with React.</p></div>} />
          
          <Route path="/privacy" element={<div className="container my-5"><h2>🔐 Privacy Policy</h2><p>This is our privacy policy page.</p></div>} />
          <Route path="/terms" element={<div className="container my-5"><h2>📄 Terms & Conditions</h2><p>These are our terms and conditions.</p></div>} />
          <Route path="/contact" element={<div className="container my-5"><h2>📞 Contact Us</h2><p>Contact us at quickynews@example.com</p></div>} />
        </Routes>
      <ScrollToTop/>
      <Footer/>
    </BrowserRouter>
    )
  }
}


export default App;

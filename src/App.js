import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import { useState } from 'react';
import Alert from './Components/Alert';




function App (props) {
  const apiKey=process.env.REACT_APP_NEWS_API
  // apiKey="02c817a482804442856a231fedb3eb31"
  // apiKey="21fc994dd6554016a0eeaf6a47b4a0de"
  const [mode, setmode] = useState('light')
  const [modetxt, setmodetxt] = useState('Light mode')
  
  const changemode=()=>{
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor='#151618'
      document.body.style.color='white'
      showAlert("dark mode has been unabled","success")
     
      setmodetxt("Light Mode");
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white'
      document.body.style.color='black'
      showAlert("Light mode has been unabled","success")
      setmodetxt("Dark mode")
      
    }
  }
    const [alert, setalert] = useState(null)

  const showAlert=(message,type)=>{
    setalert({
      message:message,
      type:type
    })
    setTimeout(() => {
        setalert(null)
    }, 1500);
  }
    return (
      <BrowserRouter>
      <Navbar mode={mode} changemode={changemode}  modetxt={modetxt} />
      <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={<News key="general" mode={mode} apiKey={apiKey}  category="general" />} />
          <Route exact path="/sports" element={<News key="sports" mode={mode} apiKey={apiKey} category="sports" />} />
          <Route exact path="/technology" element={<News key="technology" mode={mode} apiKey={apiKey} category="technology" />} />
          <Route exact path="/entertainment" element={<News key="entertainment" mode={mode} apiKey={ apiKey} category="entertainment" />} />
          <Route exact path="/health" element={<News key="health" apiKey={ apiKey} category="health" mode={mode} />} />
          <Route exact path="/about" element={<div className="container my-5"><h2>ℹ️ About Us</h2><p>This is a news app built with React.</p></div>} />
          
          <Route path="/privacy" element={<div className="container my-5"><h2>🔐 Privacy Policy</h2><p>This is our privacy policy page.</p></div>} />
          <Route path="/terms" element={<div className="container my-5"><h2>📄 Terms & Conditions</h2><p>These are our terms and conditions.</p></div>} />
          <Route path="/contact" element={<div className="container my-5"><h2>📞 Contact Us</h2><p>Contact us at quickynews@example.com</p></div>} />
        </Routes>
      <ScrollToTop/>
      <Footer mode={mode}/>
    </BrowserRouter>
    )
  
}


export default App;

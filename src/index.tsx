import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navigation from './components/Navigation';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Blog from './components/pages/Blog';
import Login from './components/pages/auth/Login';
import Signup from './components/pages/auth/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/multy-page-test/" element={<Home />} />
      <Route path="/multy-page-test/about" element={<About />} />
      <Route path="/multy-page-test/blog" element={<Blog />}>
        </Route>
      <Route path="/multy-page-test/login" element={<Login/>} />     
      <Route path="/multy-page-test/signup" element={<Signup />} /> 
      
    </Routes>
    
  </Router>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

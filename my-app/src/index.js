import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './page/Home';
import Location from './page/Location';
import About from './page/About';
import Error from './page/Error';


ReactDOM.render(
  <React.StrictMode>
    
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home /> } />
        <Route path="/about" element={<About/>} />
        <Route path="/location/:id" render={(props)=><Location {...props}/>} />
        <Route path="*" element={<Error />}/>
      </Routes> 
    </BrowserRouter>
  
  </React.StrictMode>,
  document.getElementById('root') 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
/*
        
        */
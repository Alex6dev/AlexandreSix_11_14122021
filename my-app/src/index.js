import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import About from './components/About';
import BannerAbout from './components/BannerAbout';
import Lodging from './components/lodging/Lodging';
import Error from './components/Error';
/*fetch('https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json')
  .then((res)=>res.json())
  .then((value)=>console.log(value))*/
ReactDOM.render(
  <React.StrictMode>
    
    <BrowserRouter>
      <Routes>

        <Route exact path="/" 
        element={ <><Header lienSoul={"Home"} /> <Banner /> <Gallery /><Footer/></>} >
          <Route 
          path="location/*" 
          render={(props)=><Lodging {...props}/>}
          />
        </Route>
        
         <Route path="about"
        element={<><Header lienSoul={"About"}/><BannerAbout/><About/><Footer/></>}
        />
        
        
        <Route
        path="*" 
        element={<><Header lienSoul={""}/><Error/><Footer/></>}
        />
        
      </Routes> 
    </BrowserRouter>
  
  </React.StrictMode>,
  document.getElementById('root') 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
/*<Route 
          path="/lodging/:id"
          render={(props)=> <Lodging {...props}/>} 
        />
       
        
        */
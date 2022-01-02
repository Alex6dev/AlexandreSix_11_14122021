import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter ,BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './page/Home';
import Location from './page/Location';
import About from './page/About';
import Error from './page/Error';


ReactDOM.render(
  <React.StrictMode>
    
    <BrowserRouter>
    <Router>
      <Switch>
        <Route exact path="/" component={Home } />
        <Route path="/about" component={About} />
        <Route path="/location/:id" render={(props)=><Location {...props}/>}/>
        <Route path="*" component={Error}/>
      </Switch>
      </Router> 
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
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './style.css';
import Header from './components/Header';
import Features from './components/Features';
import Footer from './components/Footer';
import Home from './components/Home';
import Calendar from './components/Calendar';
import Details from './components/Details';

const App = () => {


  return (
    <BrowserRouter>
      <Header />

      <Route 
        exact 
        path='/' 
        component={Home}
      />

      <Route 
        path='/rocket/:rocket' 
        component={Features}
      />

      <Route path='/calendar' component={Calendar} />

      <Route path='/details/:id' component={Details} />


      <Footer />
    </BrowserRouter>
  );
}

export default App;
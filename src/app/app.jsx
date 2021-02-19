import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import  SampleComponent  from '../components/sample-component/sample-component.jsx';
import Home from '../pages/Home'
import Books from '../pages/Books'
import Book from '../pages/Book'

function App() {
    return (
        <Router>
        <Route 
        exact = {true}
        path='/'
        component = {Home}>
        </Route>
        <Route 
        exact = {true}
        exact path='/books'
        component = {Books}>
        </Route>
        <Route 
         path='/books/:id'
        component = {Book}>
        </Route>
        
          
        
      </Router>
    );
  }
  
  export default App;
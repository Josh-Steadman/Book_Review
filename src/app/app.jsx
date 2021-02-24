import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Home from '../pages/Home'
import Books from '../pages/Books'
import Book from '../pages/Book'
import SearchBook from '../pages/SearchBook'

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
        exact = {true}
        exact path='/book'
        component = {SearchBook}>
        </Route>
        <Route 
         path='/books/:id'
        component = {Book}>
        </Route>
        
          
        
      </Router>
    );
  }
  
  export default App;
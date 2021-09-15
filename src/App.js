import React from 'react';
import Hero from './Hero';
import FullCard from './FullCard';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import './App.css';

function App() {

  const data = [
    {
      title: 'Html',
      description: 'This is Html'
    },

    {
      title: 'CSS',
      description: 'This is CSS'
    },

    {
      title: 'JavaScript',
      description: 'This is JavaScript'
    },

    {
      title: 'React',
      description: 'This is React'
    },

    {
    title: 'Java',
    description: 'This is Java'
  },

  {
    title: 'Redux',
    description: 'This is Redux'
  },

  ]

  return (
    <Router>
      <Route exact path='/'>
        <Hero data={data} />
      </Route>
      <Route path="/cards/:title">
        <FullCard data={data} />
      </Route>
      </Router>
  );
}

export default App;

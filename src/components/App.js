import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import '../styles/App.css'

import Navbar from './navbar/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'
import Contact from './pages/Contact'


export default function App() {
  return (
    <div className='container'>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/shop' component={Shop}/>
        </Switch>
      </Router>
    </div>
  )
}

import React from 'react'
import {Switch, Route} from 'react-router-dom'

import './css/App.css'

import Header from './components/nav/Header'
import Footer from './components/footer/Footer'

import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Conduct from './components/Conduct'
import Members from './components/Members'
import Join from './components/Join'
import Donate from './components/Donate'

const App = () => {
  return (
    <div className="App center">
      <header>
        <Header />
      </header>
      <div className='main'>
        <Switch>
          <Route path='/About'>
            <About />
          </Route>
          <Route path='/Our Projects'>
            <Projects />
          </Route>
          <Route path='/Code of Conduct'>
            <Conduct />
          </Route>
          <Route path='/Our Members'>
            <Members />
          </Route>
          <Route path='/Join Us'>
            <Join />
          </Route>
          <Route path='/Donate'>
            <Donate />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
      <hr></hr>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
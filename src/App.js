import React from 'react'

import './App.css'

import Header from './components/nav/Header'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <div className='main'>

      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
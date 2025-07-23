import React from 'react'
import ReactDOM from 'react-dom/client'

// import Card from './components/Card'
// import Jumbotron from './components/Jumbotron'
// import Navbar from './components/Navbar'
// import Foot from './components/Foot'

import Home from './components/Home';

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
//import Home from './components/Home';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)

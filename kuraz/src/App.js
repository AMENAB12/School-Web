import './App.css';
import React from 'react'
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Dashboard from './Components/Dashboard/Dashboard';
import Contact from './Components/Contact/Contact';
import Gallery from './Components/Gallery/Gallery';
function App() {
  return (
    <div>
<Nav/>
<Home/>
<Dashboard/>
<Gallery/>
<About/>
<Contact/>
    </div>
  )
}
export default App
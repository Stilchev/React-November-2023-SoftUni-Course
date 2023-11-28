import { Routes, Route } from 'react-router-dom'

import Navigation from './components/Navigation'
import Home from './components/Home'
import About from './components/About'
import Contacts from './components/Contacts'

function App() {
  

  return (
    <>
      <h1>React Router Dom</h1>

      <Navigation />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contacts' element={<Contacts />}/>
      </Routes>

      <footer>All rights reserved! &copy;</footer>
    </>
  )
}

export default App

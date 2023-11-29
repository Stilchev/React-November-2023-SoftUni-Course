import {Routes, Route} from 'react-router-dom'

import Header from "./components/Header/Header"
import Home from "./components/home/Home"
import Games from "./components/games/Games"

function App() {
 

  return (
    <>
     <div id="box">
      <Header />

      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/games' element={<Games />} />

      </Routes>
      



     </div>
    </>
  )
}

export default App

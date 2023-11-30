import {Routes, Route} from 'react-router-dom'

import Header from "./components/Header/Header"
import Home from "./components/home/Home"
import Games from "./components/games/Games"
import Create from './components/create/Create'
import Login from './components/login/Login'
import Register from './components/register/Register'

function App() {
 

  return (
    <>
     <div id="box">
      <Header />

      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/games' element={<Games />} />
        <Route path='/create' element={<Create />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      



     </div>
    </>
  )
}

export default App

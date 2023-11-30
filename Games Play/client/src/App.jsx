import {Routes, Route} from 'react-router-dom'

import Header from "./components/Header/Header"
import Home from "./components/home/Home"
import Games from "./components/games/Games"
import Create from './components/create/Create'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Details from './components/details/Details'

function App() {
 

  return (
    <>
     <div id="box">
      <Header />

      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/games' element={<Games />} />
        <Route path='/games/create' element={<Create />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/games/:gameId' element={<Details />}/>
      </Routes>
      



     </div>
    </>
  )
}

export default App

import { useState } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import TodoList from './components/TodoList'

function App() {

  return (
    <div>
      <Header />

      <TodoList />

      <Footer />
    </div>
  )
}

export default App

import { useState } from 'react'
import MovieList from './components/MovieList';
import './App.css'
import movies from './assets/movies';
import Counter from './components/Counter'



function App() {


    return (
        <div>

            <Counter />
            <h1>My first dynamic react application!</h1>

            <MovieList movies={movies} />
        </div>
    )
}

export default App

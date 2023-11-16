import { useState } from 'react'
import MovieList from './components/MovieList';
import './App.css'

const movies = [
    {
        title: 'The Matrix',
        description: 'Some description'
    },
    {
        title: 'Star Wars',
        description: 'Some description'
    },
    {
        title: 'Star Trek',
        description: 'Some description'
    },
];

function App() {


    return (
        <div>
            <h1>My first dynamic react application!</h1>

            <MovieList />
        </div>
    )
}

export default App

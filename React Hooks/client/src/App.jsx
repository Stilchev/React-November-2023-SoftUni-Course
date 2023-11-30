import 'bootstrap/dist/css/bootstrap.min.css';

import List from './components/List'

import { useState, useEffect } from 'react';


const baseUrl = 'http://localhost:3030/jsonstore/todos'


function App() {

    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch(baseUrl)
            .then(res => res.json())
            .then(result => {
                setTodos(Object.values(result))
            })
            console.log(todos);
    }, [])

    return (
        <>
            <List todos={todos} />
        </>
    )
}

export default App

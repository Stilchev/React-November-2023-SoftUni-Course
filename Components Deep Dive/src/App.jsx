import React, { useState, useEffect } from 'react'

import styles from './App.module.css'

import Starwars from './Starwars'

function App() {
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5])
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('Mount component');
    }
        , []);


    useEffect(() => {
        console.log(`Update components - ${numbers.length}`);
    }, [numbers]);

    const onClick = () => {
        setNumbers(oldState => oldState.slice(0, oldState.length - 1))
    }

    // useEffect(() => {
    //     setTimeout(() => setCount(c => c + 1), 1000);
    // },[count])



    return (
        <div>
            <Starwars />

            <h3>Count: {count}</h3>

            <ul>
                {numbers.map((number, index) =>
                    <li 
                    data-key={index} 
                    key={index}
                    className={styles.listItem}
                    >
                        {number * 2}
                    </li>)}
            </ul>
            <button onClick={onClick}>Remove</button>
            <button onClick={() => setCount(c => c + 1)}>+</button>

        </div>
    )
}

export default App

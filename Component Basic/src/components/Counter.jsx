import { useState } from "react"

export default function Counter(props) {
    const [count, setCount] = useState(0);

    const incrementCountHandler = ()=>{
        setCount(a => a + 1)
    }

    const clearCountHandler = () => {
        setCount(0)
    }

    return (
        <div>
            <h1>Counter</h1>

            <p>Count is: {count}</p>

            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={clearCountHandler}>Clear</button>
            <button onClick={incrementCountHandler}>+</button>
        </div>
    )
}
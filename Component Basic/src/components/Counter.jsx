import { useState } from "react"

export default function Counter(props) {
    const [count, setCount] = useState(0);

    const incrementCountHandler = () => {
        setCount(a => a + 1)
    }

    const clearCountHandler = () => {
        setCount(0)
    }

    // if(count < 0) {
    //     return(
    //         <h5>Invalid count</h5>
    //     )
    // }

    let message = null;

    switch (count) {
        case 1:
            message = 'Vex rune'

            break;
        case 2:
            message = 'Ohm rune'

            break;
            case 3:
            message = 'Lo rune'
            
            break;
            case 4:
            message = 'Sur rune'
            
            break;
            case 5:
            message = 'Ber rune'
            
            break;
            case 6:
            message = 'Jah rune'
            
            break;

            case 7:
            message = 'Cham rune'
            
            break;
            case 8:
            message = 'Zod rune'
            
            break;

        default:
            message = 'Not a high rune'
            break;
    }

    return (
        <div>
            <h1>Counter</h1>

            {count < 0 ? <p>Invalid count!</p> : <p>Valid count!</p>}

            {count == 0 && <p>Please start rune hunt</p>}

            <p>Count is: {count}</p>
            <h3>{message}</h3>

            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={clearCountHandler}>Clear</button>
            <button onClick={incrementCountHandler}>+</button>
        </div>
    )
}
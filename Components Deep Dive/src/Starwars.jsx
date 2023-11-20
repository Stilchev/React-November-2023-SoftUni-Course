import { useEffect, useState } from "react"

export default function Starwars(props) {
    const [chars, setChars] = useState([])
    console.log(chars);

    useEffect(() => {
        fetch('https://swapi.dev/api/people')
            .then((response) => response.json())
            .then((data) => {
                setChars(data.results)
            })
            .catch((error) => console.log(error))
    }, [])

    return (
        <div>
            <h1>SW Characters</h1>
            <ul>
                {chars.map(c=> <li key={c.url}>{c.name}</li>)}
            </ul>
        </div>
    )
}
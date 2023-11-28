import { useEffect, useState } from "react"
import CardItem from "./CardItem"

import styles from './CardItem.module.css'

const baseUrl = 'https://swapi.dev/api'

const Characters = () => {
    const [characters, setCharacter] = useState([])

    useEffect(() => {
        fetch(`${baseUrl}/people`)
            .then(response => response.json())
            .then(data => setCharacter(data.results))


    }, [])
    return (
        <div className={styles.cardItem}>
            {characters.map((char, index) => <CardItem key={char.name} id={index + 1} {...char} />)}
        </div>
    )
}

export default Characters;
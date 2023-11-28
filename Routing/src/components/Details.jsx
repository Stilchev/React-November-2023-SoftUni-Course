import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
    const name = 'Unknown'
    const {id} = useParams()
    const [char,setChar] = useState({})

    useEffect(()=>{
        fetch(`https://swapi.dev/api/people/${id}`)
        .then(res=>res.json())
        .then(setChar)
    },[id])

    return (
        <>
            <h1>{char.name}</h1>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </>
    )
}

export default Details;
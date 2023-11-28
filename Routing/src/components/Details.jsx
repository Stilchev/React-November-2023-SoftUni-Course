import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Details = () => {
    
    const {id} = useParams()
    const [char,setChar] = useState({})
    const navigate = useNavigate()

    useEffect(()=>{
        fetch(`https://swapi.dev/api/people/${id}`)
        .then(res=>{
            if(!res.ok){
                throw new Error('Not found')
            }
            return res.json()
        })
        .then(setChar)
        .catch((err)=>{
            navigate('/about')
        })
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
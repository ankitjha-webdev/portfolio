import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Visitor = () => {
    // counter for the visitor count
    // var visitCount = localStorage.getItem("page_view");
    const [count, setCount] = useState(0)

    const getCount = async () => {
        const response = await axios.get('https://api.countapi.xyz/hit/ankitkumar.tech/visits')
        setCount(response.data.value)
    }
    
    // Visitor Counter
    // const visitorCounter = () =>{

    // }

    useEffect(() => {
        //passing getData method to the lifecycle method
        getCount()
    }, [])

    return (
        // if the user ip is unique then increment the count
        <div>
            {count}
        </div>
    )
}

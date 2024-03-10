import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { TailSpin } from 'react-loader-spinner'
import './loading.css'
const Loading = () => {
    return (
        <>
        <div className='loading' >
            <TailSpin
                height="100"
                width="100"
                color='white'
                ariaLabel='loading'
            />   
        </div>
        </>
    )
}

export default Loading
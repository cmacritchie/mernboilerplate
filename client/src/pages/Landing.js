import React, { useEffect } from 'react'
import websocket from '../websocket'

const Landing = () => {

    useEffect(() => {
        websocket.on("postedData", data => {
            console.log('hello')
        })   
    }, [])

    return (
        <div>
            <h1>Landing Page</h1>
            <p>Welcome!</p>

        </div>
    )
}

export default Landing

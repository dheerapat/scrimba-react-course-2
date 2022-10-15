import React from "react"

export default function Joke(props) {
    return (
        <div>
            <h1>{props.setup}</h1>
            <h2>{props.punch}</h2>
            <hr/>
        </div>
    )
}
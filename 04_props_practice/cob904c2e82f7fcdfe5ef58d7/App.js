import React from "react"
import Joke from "./Joke"

export default function App() {
    return (
        <div>
            <Joke
                setup="Why do bees stay in the hive in the winter?"
                punch="Swarm"
            />
            <Joke
                setup="What's the best thing about Switzerland?"
                punch="I don't know, but the flag is a big plus!"
            />
        </div>
    )
}
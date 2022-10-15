import React from "react"
import Nav from "./components/Nav"
import Journal from "./components/Journal"
import data from "./data"

export default function App() {
    const journals = data.map(item => {
        return (
            <Journal
                key={item.id}
                item={item}
            />
        )
    })
    
    return (
        <div>
            <Nav />
            <main>
                {journals}
            </main>
        </div>
    )
}
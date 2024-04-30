import React, {useState} from 'react'

// setting state based on previous state value
// useState with previous state
function HookCounterTwo() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    // whenever i want to update a state value based on previous state value,
    // always pass in a function to set the new state value
    const incrementFive = () => {
        for (let i = 0; i < 5; i++){
            setCount(prevCount => prevCount + 1)
        }
    }

    return (
        <div>
            Count: {count}
            <button onClick={() => setCount(initialCount)}> Reset </button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}> Increment </button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}> Decrement </button>
            <button onClick={incrementFive}>Increment 5</button>
        </div>
    )
}

export default HookCounterTwo
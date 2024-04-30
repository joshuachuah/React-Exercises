import React, { useState, useEffect } from 'react'

// useEffect after render 
function HookCounterOne() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('Updating document title')
        document.title = `You clicked ${count} times`
    })

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Click {count} times</button>
        </div>
    )
}

export default HookCounterOne

// useEffect runs after every render
// useEffect is placed inside the component
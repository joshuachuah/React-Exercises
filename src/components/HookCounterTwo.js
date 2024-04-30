import React, { useState, useEffect } from 'react'

// conditionally run effects
function HookCounterOne() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('Updating document title')
        document.title = `You clicked ${count} times`
        // second parameter is the array of values that the effect depends on
    }, [count])

    return (
        <div>
            <input type='text' value={name} onChange={e => setName(e.target.value)}></input>
            <button onClick={() => setCount(count + 1)}>Click {count} times</button>
        </div>
    )
}

export default HookCounterOne


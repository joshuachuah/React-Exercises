import React, {useState} from 'react'

// useState with array
function HookCounterFour() {
    const [items, setItems] = useState([])

    // whenever addItem is called, we make a copy of all the items in the array
    // using the spread operator.
    // to the list of copied items, we append another object so we don't override 
    // the original array
    const addItem = () =>{
        setItems([...items,{
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }
    return (
        <div>
            <button onClick={addItem}>Add a number</button>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.value}</li>
                ))}
            </ul>
        </div>
    )
}

export default HookCounterFour
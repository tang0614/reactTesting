import React, {useState} from 'react'

export const Input = () =>{
    const [value, setValue] = useState('')

    return(<div>
        <span data-testid="change-input-greeting">{`Welcome ${value}`}</span>
        <input
            type="text"
            value={value}
            aria-label="user-name"
            onChange={(e)=>setValue(e.target.value)}
        />
    </div>)
}
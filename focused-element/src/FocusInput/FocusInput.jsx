import React, {useState, useRef } from 'react'

export const FocusInput = () =>{
    let [value, setValue] =  useState("")
    const inputRef = useRef(null);

   
    return(<div>
        <input
        value = {value}
        onChange = {(e)=>setValue(e.target.event)}
        aria-label = {"focus"}
        type="text"
        placeholder="Focus me"
        ref={inputRef}
        />
        <button onClick={()=> inputRef.current.focus()}>Click to focus</button>
    </div>)
}
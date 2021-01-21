import React from 'react'

export const EasyButton = ({text, ...other})=>{ 

    return(
        <button {...other}>{text}</button>
    )
}

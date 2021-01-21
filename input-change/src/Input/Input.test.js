import {Input} from './Input'
import {render, fireEvent} from '@testing-library/react'

it('display correct input', ()=>{
    const {getByTestId, getByLabelText} = render(<Input/>)
    const greeting = getByTestId('change-input-greeting')
    const inputField = getByLabelText('user-name')

    expect(inputField.value).toBe("")
    expect(greeting.textContent).toBe('Welcome ')
    
})


it('display correct input after enter new value', ()=>{
    const {getByTestId, getByLabelText} = render(<Input/>)
    const inputField = getByLabelText('user-name')
    const greeting = getByTestId('change-input-greeting')
    fireEvent.change(inputField, { target: { value: "Rafael" }});
    expect(inputField.value).toBe('Rafael')
    expect(greeting.textContent).toBe('Welcome Rafael')
})
import { render, fireEvent, cleanup} from '@testing-library/react';
import {FocusInput} from './FocusInput'


afterEach(cleanup);
it('tests input form', ()=>{
    const {getByLabelText} = render(<FocusInput/>)
    const input = getByLabelText('focus')
    expect(input.value).toBe('')
    
})

test('tests button onClick', ()=>{

    const {getByText, getByPlaceholderText} = render(<FocusInput />)
    const button = getByText('Click to focus')
    fireEvent.click(button)
   
})
import {EasyButton} from './EasyButton'
import {render, fireEvent} from '@testing-library/react';


it('trigger an callBack func after a click on button', ()=>{
    const onClick = jest.fn()
    const {getByText} = render(<EasyButton onClick={onClick}/>)
   
    getByText('easy')
    const button = getByText('easy')
    fireEvent.click(button)
    expect(onClick).toHaveBeenCalled()
})
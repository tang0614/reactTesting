import {EasyButton} from './EasyButton'
import {render, fireEvent, cleanup} from '@testing-library/react';
import * as React from 'react'

afterEach(cleanup)

const defaultProps = {
    onClick: jest.fn(),
    text: 'easy'
}

it('button renders with correct text', ()=>{
    const {getByText, rerender} = render(<EasyButton {...defaultProps}/>)
    expect(getByText('easy')).toBeTruthy();  

    //change props
    rerender(<EasyButton {...defaultProps} text='submit'/>)
    expect(getByText('submit')).toBeTruthy();  
})


it('calls correct function on click', () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <EasyButton {...defaultProps} onClick={onClick} />
    );
    fireEvent.click(getByText(defaultProps.text));
    expect(onClick).toHaveBeenCalled();
  });

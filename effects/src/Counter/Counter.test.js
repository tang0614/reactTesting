import {render, fireEvent} from '@testing-library/react'
import {Counter} from './Counter'

it('render count time without clicking', ()=>{
    let {getByTestId} = render(<Counter/>)
    expect(getByTestId('count').textContent).toBe('Clicked 0 time')
})

it('render count time after clicking', ()=>{
    let {getByTestId} = render(<Counter/>)
    fireEvent.click(getByTestId('Increment'))
    expect(getByTestId('count').textContent).toBe('Clicked 1 time')
    fireEvent.click(getByTestId('Increment'))
    expect(getByTestId('count').textContent).toBe('Clicked 2 times')
})

it('window title changes after every increment if checkbox is checked', ()=>{
    global.window.document.title = "My Awesome App";
    const { getByTestId, getByLabelText } = render(<Counter />);
    
    // When checkbox is unchecked, incrementing has no effect
    fireEvent.click(getByTestId("Increment"));
    expect(global.window.document.title).toBe("My Awesome App");

    // Check and assert the document title changes
    const checkbox = getByLabelText("Check to display count in document title");
    fireEvent.click(checkbox);
    expect(global.window.document.title).toBe("Total number of clicks: 1");

    // Works if you increment multiple times
    fireEvent.click(getByTestId("Increment"));
    expect(global.window.document.title).toBe("Total number of clicks: 2");

    // Unchecking will return to the original document title
    fireEvent.click(checkbox);
    expect(global.window.document.title).toBe("My Awesome App");
})
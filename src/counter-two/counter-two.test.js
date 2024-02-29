import { render, screen} from "@testing-library/react";
import CounterTwo from ".";
import userEvent from "@testing-library/user-event";

describe('Counter two', () => {
    test('render the component', () => {
        render(<CounterTwo count={0} />)
        const getHeadingElement = screen.getByRole('heading', { level: 1 })
        expect(getHeadingElement).toBeInTheDocument()
    })
    test('handle event called', async() => {
        userEvent.setup()
        const incrementHandler = jest.fn()
        const decrementHanlder = jest.fn();
        render(<CounterTwo count={0} handleIncrement={incrementHandler} handleDecrement={decrementHanlder}/>)
        const incrementBtn = screen.getByRole('button', { name: 'Increment' })
        const decrementBtn = screen.getByRole('button', { name: 'Decrement' })
        await userEvent.click(incrementBtn);
        await userEvent.click(decrementBtn);
        expect(incrementHandler).toHaveBeenCalledTimes(1);
        expect(decrementHanlder).toHaveBeenCalledTimes(1);

    })
})
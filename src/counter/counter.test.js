import { render, screen, fireEvent, act } from "@testing-library/react";
import Counter from ".";

describe('Counter component ', () => {
    test('render the component', () => {
        render(<Counter />)
        const elementHeader = screen.getByRole('heading')
        expect(elementHeader).toBeInTheDocument();
        const elementBtn = screen.getByRole('button', { name: /increment/i })
        expect(elementBtn).toBeInTheDocument()
    })
    test('render the counter of 0', () => {
        render(<Counter />)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('0')
    })
    test('button click the Increment counter one time', async () => {
        render(<Counter />)
        const incrementButton = screen.getByRole('button', { name: 'Increment' })
        await act(() => { fireEvent.click(incrementButton); }); //to ensure that all updates related to React components (such as state changes, effects, etc.)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('1')
    })
})
import { render, screen } from '@testing-library/react'
import HelloWorld from '.'

describe('hello world', () => {
    test('render correctly', () => {
        render(<HelloWorld />)
        const textElement = screen.getByText('hello')
        expect(textElement).toBeInTheDocument()
    })
    // test('with name render', () => {
    //     render(<HelloWorld name='vijay' />)
    //     const textElement = screen.getByText('hello vijay')
    //     expect(textElement).toBeInTheDocument()
    //     const btnElement=screen.getByTestId('button') ;
    //     expect(btnElement).toBeDisabled()
    // })
})

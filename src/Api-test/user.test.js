import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import User from './users'
// import { rest } from 'msw'
// import { setupServer } from 'msw/node'
import { userData } from '../_mock_/data'

// const server = setupServer(
//     rest.get('"https://reqres.in/api/users/', (req, res, ctx) => {
//         return res(ctx.status(200), ctx.json(userData))
//     })
// )
describe('render the user component', () => {

    // beforeAll(() => server.listen());
    // afterEach(() => server.resetHandlers());
    // afterAll(() => server.close());

    test('render the header text as users', () => {
        const { container } = render(<User />)
        const elementheading = screen.getByRole('heading', { level: 1 })
        expect(container).toMatchSnapshot();
        expect(elementheading).toBeTruthy()
    })
    test('search bar input is empty', async () => {
        const { container } = render(<User />)
        const inputSearch = await waitFor(() => screen.getByPlaceholderText(/search user/i))
        expect(container).toMatchSnapshot();
        expect(inputSearch).toHaveAttribute("value", '')
    })
    test('search bar input has value', async () => {
        const { container } = render(<User />)
        const inputSearch = await waitFor(() => screen.getByPlaceholderText(/search user/i))
        fireEvent.change(inputSearch, { target: { value: 'tests' } })
        expect(container).toMatchSnapshot();
        expect(inputSearch).toHaveAttribute("value", 'tests')
    })
    // test('return json when response is ok', async () => {
    //     expect.assertions(3)
    //     const res = await fetch('https://reqres.in/api/users/', { method: 'GET' })
    //     const data = await res.json()
    //     expect(data.status).toBe(200)
    //     expect(data.ok).toBe(true)
    //     expect(JSON.stringify(data)).toBe(JSON.stringify(userData))
    // })
})

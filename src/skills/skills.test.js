import { render, screen, fireEvent, logRoles } from '@testing-library/react'
import Skills from '.'

describe('Skills', () => {
    const skills = ["Html", "Css", "Js"]
    test('render the component', () => {
        render(<Skills skills={skills} />)
        const listElement = screen.getByRole('list')
        expect(listElement).toBeInTheDocument();
    })
    test('render the list of skills', () => {
        render(<Skills skills={skills} />)
        const listAllElement = screen.getAllByRole('listitem');
        expect(listAllElement).toHaveLength(skills.length)
    })
    test('render the Login button', () => {
        render(<Skills skills={skills} />)
        const loginButton = screen.getByRole('button', {
            name: 'Login'
        })
        expect(loginButton).toBeInTheDocument()
    })
    test('render the Learning button', () => {
        render(<Skills skills={skills} />)
        const startLearnigbtn = screen.queryByRole('button', {
            name: 'Start learnings'
        })
        expect(startLearnigbtn).not.toBeInTheDocument()
    })
    test('start learning button render after delay', async () => {
        render(<Skills skills={skills} />)
        const startLearnigbtn = await screen.findByRole('button', { name: /Start learnings/i })
        expect(startLearnigbtn).toBeInTheDocument()
    })
    test('click the button changes ', () => {
        const view = render(<Skills skills={skills} />)
        //debugging testing
        // logRoles(view.container)
        const clickButton = screen.getByRole('button', /login/i)
        fireEvent.click(clickButton)
        expect(clickButton).toBeInTheDocument()
    })
})
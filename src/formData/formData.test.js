import { render, screen } from '@testing-library/react'
import FormData from './index'

describe('formData', () => {
    test('render correctly', () => {
        render(<FormData />)
        //getByRole
        const pageHeading = screen.getByRole('heading', { level: 1 })
        expect(pageHeading).toBeInTheDocument();

        const sectionHeading = screen.getByRole('heading', { level: 2 })
        expect(sectionHeading).toBeInTheDocument();

        const elementName = screen.getByRole('textbox', {
            name: 'Name'
        })
        expect(elementName).toBeInTheDocument()
        //getByLabelText
        const elementName2 = screen.getByLabelText('Name',{selector:'input'});
        expect(elementName2).toBeInTheDocument()
        //getByPlaceholderText
        const elemrntNamePlaceHolder=screen.getByPlaceholderText('Please Enter Name')
        expect(elemrntNamePlaceHolder).toBeInTheDocument()
        //getByText
        const paragraphElement=screen.getByText('All the Fiedls are Mandatory');
        expect(paragraphElement).toBeInTheDocument()
        //getByDisplayValue
        const getdInputValue=screen.getByDisplayValue('vijayaraj');
        expect(getdInputValue).toBeInTheDocument()
        //getByAltText
        const elementAlttext=screen.getByAltText('the person with a laptop')
        expect(elementAlttext).toBeInTheDocument()
        //getByTitle
        const elementTitle=screen.getByTitle('open')
        expect(elementTitle).toBeInTheDocument()
        //getByTestId
        const cutomElement=screen.getByTestId('custom-element');
        expect(cutomElement).toBeInTheDocument()

        const jobLocation = screen.getByRole('combobox')
        expect(jobLocation).toBeInTheDocument()

        const termsElement = screen.getByRole('checkbox')
        expect(termsElement).toBeInTheDocument();

        const termsElement2 = screen.getByLabelText('I agree to the terms and conditions')
        expect(termsElement2).toBeInTheDocument()

        const submitButtonElement = screen.getByRole('button');
        expect(submitButtonElement).toBeInTheDocument()
    })
})

//priority order in RTL methods
    //1.getByRole
    //2.geyByLabelText
    //3.getByPlaceHolderText
    //4.getByText
    //5.getByDisplayValue
    //6.getByAltText
    //7.getByTitle
    //8.getByTestId
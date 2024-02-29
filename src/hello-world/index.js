const HelloWorld = ({ name }) => {
    return (
        <>
            <p>hello {name}</p>
            <h4 data-testid='hello-text'>Vijayaraj</h4>
            <button type="submit" data-testid='button' disabled>haha</button>
        </>
    )
}
export default HelloWorld
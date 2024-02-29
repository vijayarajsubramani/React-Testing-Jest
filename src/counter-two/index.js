
const CounterTwo=(props)=>{
    return(
        <>
            <h1>Counter two</h1>
            {props.count && <p>{props.count}</p>}
            {props.handleIncrement && <button onClick={props.handleIncrement}>Increment</button>}
            {props.handleDecrement && <button onClick={props.handleDecrement}>Decrement</button>}

        </>
    )
}
export default CounterTwo
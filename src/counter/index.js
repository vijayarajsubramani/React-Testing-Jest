import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount((p) => p + 1)
    }
    return (
        <>
            <h1>{count}</h1>
            <button onClick={handleIncrement}>Increment</button>
        </>
    )
}
export default Counter
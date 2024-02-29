import { useState } from "react"

const useCounter=()=>{
    const [count,setCount]=useState(0);
    const handleIncrement=()=>setCount(p=>p+1)
    const handleDecrement=()=>setCount(p=>p-1);
    return {count,handleDecrement,handleIncrement}
}
export default useCounter;
import { useEffect, useState } from "react"

const Skills = ({ skills }) => {
    const data = ["html", "Css", "Js"]
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoggedIn(true)
        }, 500); //testing default timeout 1000ms
    }, [])

    return (
        <>
            <ul>
                {data?.map((e, i) => <li key={i}>{e}</li>)}
            </ul>
            {isLoggedIn ? <button>Start learnings</button> : <button onClick={() => setIsLoggedIn(true)}>Login</button>}
        </>
    )
}
export default Skills
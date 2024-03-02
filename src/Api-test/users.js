import { useEffect, useState } from "react"
import UserList from "./userList";

const User = () => {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => setSearchTerm(e.target.value)

    const fetchUsers = async () => {
        const res = await fetch('https://reqres.in/api/users/', { method: 'GET' })
        const json = await res.json()
        setUsers(json.data)
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <>
            <div className="App">
                <h1>Users </h1>
                <input type="text" value={searchTerm} onChange={handleChange} placeholder="search user"/>
                <UserList user={users} searchTerm={searchTerm} />
            </div>
        </>
    )
}

export default User
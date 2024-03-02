const UserList = ({ user, searchTerm }) => {
    const filteredData = user?.filter((e) =>
        e.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div className="flex">
                {filteredData.map((e) => (
                    <div key={e.id} data-testid={`user-${e.id}`}>
                        <p><strong>{e.first_name}</strong></p>
                        <p data-testid={`email-${e.id}`}>{e.email}</p>
                        <img src={e.avatar} alt={e.id} />
                    </div>
                ))}
            </div>
        </>
    );
};
export default UserList
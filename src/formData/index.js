const FormData = () => {
    return (
        <>
            <h1>heading 1</h1>
            <h2>heading 2</h2>
            <p>All the Fiedls are Mandatory</p>
            <img src="https://via.placeholder.com/150" alt="the person with a laptop"/>
            {/* title attributes toottip of html */}
            <span title="open">open</span> 
            <div data-testid='custom-element'>Custom Html Element</div>

            <form>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input type="text" id="name" placeholder='Please Enter Name' value='vijayaraj' onChange={()=>{}}/>
                </div>
                <div>
                    <label htmlFor='bio'>Bio</label>
                    <textarea id="bio" placeholder='Please Enter Bio' />
                </div>
                <div>
                    <label htmlFor="job-location">Name</label>
                    <select id="job-location">
                        <option value=''>Select county</option>
                        <option value='IND'>India</option>
                        <option value='USA'>USA</option>
                        <option value='UK'>UK</option>
                        <option value='AUS'>Australia</option>
                    </select>
                </div>
                <div>
                    <label>
                        <input type="checkbox" id="terms" /> I agree to the terms and conditions
                    </label>
                </div>
                <button type="submit">submit</button>
            </form>
        </>
    )
}
export default FormData
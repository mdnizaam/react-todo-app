import React, { useState } from 'react'
import {reactLocalStorage} from 'reactjs-localstorage';

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', username: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })

        reactLocalStorage.setObject("user",user);

    

        

	}

    var use=reactLocalStorage.getObject("user")

    console.log(use)

	return (
        <>
        <div className="container text-white">
            <div className="row">
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.username) return

				props.addUser(user)
				setUser(initialFormState)
			}}
            
		>
            <div className="form-group ">
			<label>Name</label>
			<input type="text" name="name" className="form-control" placeholder="Enter name" value={user.name} onChange={handleInputChange} />
            </div>
            <div className="form-group ">
			<label>Username</label>
			<input type="text" name="username" className="form-control" placeholder="Enter Username"  value={user.username} onChange={handleInputChange} />
            </div>
			<button className="btn btn-primary">Add new user</button>
		</form>

       
        </div>
        </div>
        </>
	)
}

export default AddUserForm;

import React, { useState,  } from 'react'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import UserTable from './tables/UserTable'
import {reactLocalStorage} from 'reactjs-localstorage';

const App = () => {
	// Data
	const usersData = [
		{ id: 1, name: 'Md Nizam', username: 'nizam@gmail.com' }
	
	]


  

	const initialFormState = { id: null, name: '', username: '' }

	// Setting state
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)


  reactLocalStorage.setObject("user",users);

    var use=reactLocalStorage.getObject("user")

    console.log(use)

  
 

	// CRUD operations
	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])

    setCurrentUser(currentUser);

 

	}



 

  


	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, username: user.username })
	}

	return (
<>
<div className="container my-4 " >
  <div className="row">
    <div className="col-lg-12 bg-dark text-center text-white">
    <h1>REACT TODO LIST</h1>
    </div>
    
  </div>
</div>
    
		<div className="container-fluid">
		
			<div className="row">
				<div className="col-lg-6 " style={{ backgroundColor: "#9CA3AF" }}>
					{editing ? (
						<>
							<h2>EDIT USER</h2>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>

						</>
					) : (
						<>
           
							<h2 className="text-danger">ADD USER</h2>
							<AddUserForm addUser={addUser} />
              
						</>
					)}
				</div>
				<div className="col-lg-6 " style={{ backgroundColor:"#A7F3D0"}}>
					<h2 className="text-danger">USERS TABLE</h2>
					<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
				</div>
			</div>
		</div>
    </>
	)
}

export default App

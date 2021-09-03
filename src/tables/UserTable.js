import React from 'react'

const UserTable = props => (
    <>
    <div className="container">
  <table className="table table-border table-hover table-light">
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th className="text-center">Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id} >
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td className="text-center">
              <button 
                onClick={() => {
                  props.editRow(user)
                }}
                className="btn btn-primary mx-2"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteUser(user.id)}
                className="btn btn-danger mx-2"
              >
                Delete
              </button>
              
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
  </div>
  </>
)

export default UserTable

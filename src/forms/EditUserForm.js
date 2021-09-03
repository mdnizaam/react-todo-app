import React, { useState, useEffect } from 'react'

const EditUserForm = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
      <>
      <div className="container text-white ">
          <div className="row">
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
        <div className="form-group">
      <label>Name</label>
      <input type="text" name="name" className="form-control" value={user.name} onChange={handleInputChange} />
      </div>
      <div className="form-group">
      <label>Username</label>
      <input type="text" name="username" className="form-control" value={user.username} onChange={handleInputChange} />
      </div>
      <button className="btn btn-primary mx-2">Update user</button>
      <button onClick={() => props.setEditing(false)} className="btn btn-warning">
        Cancel
      </button>
    </form>
    </div>
    </div>
    </>
  )
}

export default EditUserForm

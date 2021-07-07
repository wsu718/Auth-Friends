import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';


const UpdateFriend = props => {

    const [updateFriend, setUpdateFriend] = useState({});


    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .put(`/friends/${updateFriend.id}`, updateFriend)
            .then(res => props.modifyFriends(res.data))
            .catch(err => console.log(err))
    }

    const handleChanges = e => {
        setUpdateFriend({
            ...updateFriend,
            [e.target.name]: e.target.type === 'number' ? +e.target.value : e.target.value
        })
    }



    return (
        <div>
            <h2>Update friend:</h2>
            <form onSubmit={handleSubmit}>
                <label>Friend to update</label>
                <input
                    type="number"
                    name="id"
                    value={updateFriend.id}
                    onChange={handleChanges}
                />
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={updateFriend.name}
                    onChange={handleChanges}
                />
                <label>Age</label>
                <input
                    type="number"
                    name="age"
                    onChange={handleChanges}
                    value={updateFriend.age}
                />
                <label>Email</label>
                <input
                    name="email"
                    type="text"
                    onChange={handleChanges}
                    value={updateFriend.email}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default UpdateFriend;
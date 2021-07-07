import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const AddFriend = props => {

    const [newFriend, setNewFriend] = useState({
        name: '',
        age: '',
        email: ''
    });

    const submitFriend = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/friends', newFriend)
            // .then(res => console.log(res.data))
            // .then(console.log(friends))
            .then(res => props.modifyFriends(res.data))
            .catch(err => console.log(err))
        console.log(newFriend)
    }

    const handleChange = e => {

        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.type === 'number' ? parseInt(e.target.value) : e.target.value
        })
        // console.log(e.target.name, e.target.value)
    }

    return (
        <div>
            <h2>Add friend:</h2>
            <form onSubmit={submitFriend}>
                <label>Name:</label><input
                    type="text"
                    name="name"
                    value={newFriend.name}
                    onChange={handleChange}

                />
                <label>Age</label>
                <input
                    type='number'
                    name='age'
                    value={newFriend.age}
                    onChange={handleChange}
                />
                <label>Email</label>
                <input
                    type='text'
                    name='email'
                    value={newFriend.email}
                    onChange={handleChange}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddFriend;
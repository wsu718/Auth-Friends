import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import FriendCard from './FriendCard';

const FriendsList = () => {

    const [friends, setFriends] = useState([]);
    const [newFriend, setNewFriend] = useState({
        name: '',
        age: '',
        email: ''
    });

    useEffect(() => {
        axiosWithAuth()
            .get('/friends')
            // .then(res => console.log(res.data))
            // .then(console.log(friends))
            .then(res => setFriends(res.data))
            .catch(err => console.log(err))
    }, []);

    const submitFriend = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/friends', newFriend)
            // .then(res => console.log(res.data))
            // .then(console.log(friends))
            .then(res => setFriends(res.data))
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

    // console.log(newFriend)

    return (
        <div>
            <h2>Your friends:</h2>
            <div className="friendList">


                {friends.map(friend => (
                    <FriendCard friend={friend} key={friend.id} />
                ))}
            </div>
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
        </div>
    )
}

export default FriendsList;
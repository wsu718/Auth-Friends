import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import FriendCard from './FriendCard';
import AddFriend from './AddFriend';
import UpdateFriend from './UpdateFriend';
import DeleteFriend from './DeleteFriend';

const FriendsList = () => {

    const [friends, setFriends] = useState([]);


    useEffect(() => {
        axiosWithAuth()
            .get('/friends')
            .then(res => setFriends(res.data))
            .catch(err => console.log(err))
    }, []);

    const modifyFriends = arg => {
        setFriends(arg)
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


            <AddFriend friends={friends} modifyFriends={modifyFriends} />


            <UpdateFriend modifyFriends={modifyFriends} />

            <DeleteFriend modifyFriends={modifyFriends} />

        </div>
    )
}

export default FriendsList;
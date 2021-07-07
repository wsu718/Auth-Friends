import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const DeleteFriend = props => {

    const [deleteId, setDeleteId] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .delete(`/friends/${deleteId}`)
            .then(res => props.modifyFriends(res.data))
            .catch(err => console.log(err))
    }

    const handleChanges = e => {
        setDeleteId(+e.target.value);
    }

    return (
        <div>
            <h3>Delete friend</h3>
            <form onSubmit={handleSubmit}>
                <label>Friend to delete</label>
                <input
                    type="number"
                    name="id"
                    onChange={handleChanges}
                    value={deleteId}
                />
                <button>Delete</button>
            </form>
        </div>)

}

export default DeleteFriend
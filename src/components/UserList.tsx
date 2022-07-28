import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {fetchUsers} from "../store/action-creators/user";
import {useActions} from "../hooks/useActions";


const UserList: React.FC = () => {
    const {users, loading, error} = useTypedSelector(state => state.user)
    const {fetchUsers} = useActions()

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <div>
            {users.map(el =>
                <div>{el.name}</div>
            )}
        </div>
    );
};

export default UserList;
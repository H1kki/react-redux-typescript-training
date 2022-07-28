import {Dispatch} from "react";
import {UserAction, UsersActionTypes} from "../../types/user";
import axios from "axios";


export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UsersActionTypes.FETCH_USERS})
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            dispatch({type: UsersActionTypes.FETCH_USERS_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({type: UsersActionTypes.FETCH_USERS_ERROR, payload: "Error"})
        }
    }
}
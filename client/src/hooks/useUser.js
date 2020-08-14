import {useContext} from 'react';
import { UserContext } from '../context/UserContext';
import jwt_decode from "jwt-decode";

export const useUser = () => {
    const [ user, setUser ] = useContext(UserContext);
    const loginUser = (token) => {
        const { firstName, id } = jwt_decode(token);
        setUser({
            isAuth: true,
            firstName,
            id,
            token
        }) 
    }
    return {
        user,
        loginUser
    }
};

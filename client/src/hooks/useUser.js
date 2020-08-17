import {useContext} from 'react';
import { UserContext } from '../context/UserContext';

export const useUser = () => {
    const [ user, setUser ] = useContext(UserContext);
    const loginUser = (id, token) => {
        setUser({
            isAuth: true,
            id,
            token
        }) 
    };
    const logoutUser = () => {
        setUser( () => ({
            isAuth: false
        }))
    };
    return {
        user,
        loginUser,
        logoutUser
    }
};

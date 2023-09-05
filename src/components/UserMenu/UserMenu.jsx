import { useAuth } from 'hooks/useAuth';
import React from 'react'
import { useDispatch } from 'react-redux';
import { logOutUser } from 'redux/auth/operation';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';

import css from './UserMenu.module.css';

function UserMenu() {
    const dispatch = useDispatch();
    const {data} = useAuth();
    const handleLogOut = async () => {
     dispatch(logOutUser())
    };
    return (
        <div className={css.user}>
            <p className={css.text}>Hello, {data.name}</p>
            <button type='button' onClick={handleLogOut} className={css.btn}><LogoutSharpIcon/></button>
        </div>
    );
};

export default UserMenu
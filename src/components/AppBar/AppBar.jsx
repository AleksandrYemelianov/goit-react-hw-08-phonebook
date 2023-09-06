import UserMenu from 'components/UserMenu/UserMenu'
import { useAuth } from 'hooks/useAuth';
import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

import css from './AppBar.module.css';

function AppBar() {
  const {isSuccesses} = useAuth();

  return (
    <header className={css.header}>
      <nav className={css.container}>
        <Link to='/' className={css.logo}>
          <ContactPhoneIcon sx={{fontSize: '30px', color: 'black'}}/>
          <p className={css.logoBase}>Phonebook</p>
        </Link>
        <NavLink to='/' className={({ isActive }) => isActive ? css.active : css.link}>Home</NavLink>
        {isSuccesses ? <NavLink to='/contacts' className={({isActive}) => isActive ? css.active : css.link}>Contacts</NavLink> : <div></div>}
        {isSuccesses ? <UserMenu /> : <NavLink to='/login' className={({isActive}) => isActive ? css.active : css.link}>Login</NavLink>}
      </nav>
    </header>
  );
}

export default AppBar
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Box, TextField, Typography, Button, Container} from '@mui/material';
import { Link } from 'react-router-dom';
import { loginUser } from 'redux/auth/operation';

import css from './LoginForm.module.css';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()


    const credentials = {
        email,
        password,
    }

    const handleChange = e => {
        const { name, value } = e.target;
        switch (name) {
            case 'email':
                setEmail(value)
                break;
            case 'password':
                setPassword(value)
                break;
    
            default:
                break;
        };
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginUser(credentials));
    setEmail('');
    setPassword('');
  };
  return (
    <Container maxWidth="xs" sx={{ p: '20px', mt: '30vh', borderRadius: '10px', boxShadow: '0px 0px 12px 5px rgba(232, 150, 17,0.8)', background: '#E89611', opacity: '0.9'}}>
      <Box sx={{
        textAlign: 'center'
      }}>
        <Typography variant="h4" component="h2" sx={{ fontSize: '24px', fontWeight: '500', letterSpacing: '0.01em', color: 'black' }}>
          LOGIN
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            type="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={handleChange}
          />
          
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            type="password"
            label="Password"
            name="password"
            autoComplete="password"
            value={password}
            onChange={handleChange}
             />
          <Button type='submit' variant="contained" size="medium" sx={{width: '30%', mx: 'auto', mt: '10px', fontWeight: '500', letterSpacing: '0.1em', backgroundColor: 'transparent', border: '1px solid #000000', borderRadius: '10px', color: '#000000', '&:hover': {color: '#E89611', border: '1px solid transparent' } }}>LOGIN</Button>
        </Box>
        <Typography variant='p' component="p" sx={{ mt: '10px', fontSize: '16px', color: 'black'}}>
          Don’t have an account? 
          <Link to='/signUp' className={css.link}>
            SIGN UP
          </Link>
        </Typography>
      </Box>
    </Container>
  );
}
export default LoginForm
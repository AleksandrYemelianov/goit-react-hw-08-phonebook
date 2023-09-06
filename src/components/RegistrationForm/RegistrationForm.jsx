import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {  Box, TextField, Typography, Button, Container} from '@mui/material';
import { registrationUser } from 'redux/auth/operation';

import css from './RegistrationForm.module.css';


function RegistrationForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()
    

    const credentials = {
        name,
        email,
        password,
    }

    const handleChange = e => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value)
                break;
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
            dispatch(registrationUser(credentials))
            setName('');
            setEmail('');
            setPassword('');
    };
    return (
        <Container maxWidth="xs" sx={{ p: '20px', mt: '30vh', borderRadius: '10px', boxShadow: '0px 0px 12px 5px rgba(232, 150, 17,0.8)', background: '#E89611', opacity: '0.9' }}>
            <Box sx={{
                textAlign: 'center'
            }}>
                <Typography variant="h4" component="h2" sx={{fontSize: '24px', fontWeight: '500', letterSpacing: '0.01em', color: 'black' }}>
                    SIGN UP
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit} sx={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        type="text"
                        label="Name"
                        name="name"
                        autoComplete="name"
                        autoFocus
                        value={name}
                        onChange={handleChange}
                    />

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        type="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        value={email}
                        onChange={handleChange} 
                        helperText='example@example.com'
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
                        helperText='Password must have at least 7 characters.'
                        />
                    <Button type='submit' variant="contained" size="medium" sx={{ width: '30%', mx: 'auto', mt: '10px', fontWeight: '500', letterSpacing: '0.1em', backgroundColor: 'transparent', border: '1px solid #000000', borderRadius: '10px', color: '#000000', '&:hover': {color: '#E89611', border: '1px solid transparent' } }}>SING UP</Button>
                </Box>
                <Typography variant='p' component="p" sx={{ mt: '10px', fontSize: '16px', color: 'black' }}>
                    Already have an account?
                    <Link to='/login' className={css.link}>
                        LOGIN
                    </Link>
                </Typography>
            </Box>
        </Container>
    );
}
export default RegistrationForm
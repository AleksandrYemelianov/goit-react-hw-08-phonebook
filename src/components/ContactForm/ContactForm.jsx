import React, { useState } from 'react';

import { selectContacts } from 'redux/contacts/contactsSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import {createContact } from 'redux/contacts/operations';

import optionNotification from 'components/Notification/Notification';
import 'react-toastify/dist/ReactToastify.css';
import { Box, Button, Container, TextField, Typography } from '@mui/material';


export default function ContactForm() {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const dispatch = useDispatch();
    const { items } = useSelector(selectContacts)
    const dataContact = {
        name,
        number: phone
    }

    const nameNormalize = name.toLowerCase();
    const isExist = items.find(item => nameNormalize === item.name.toLocaleLowerCase())

    const handleChange = e => {
        const { name, value } = e.target;
 
        switch (name) {
            case 'name':
                setName(value)
                break;
            case 'number':
                setPhone(value)
                break;
    
            default:
                break;
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isExist) {
            toast.warn(`${name} is already in contacts.`, optionNotification)
            return
        } else {
            dispatch(createContact(dataContact));
            toast.success(`Contact ${name} has been add.`, optionNotification)
            setName('');
            setPhone('');
        };
    }

    return (
        <Container maxWidth="xs" sx={{ minHeight: '300px', p: '20px', mt: '10vh', borderRadius: '10px', boxShadow: '0px 0px 12px 5px rgba(232, 150, 17,0.8)', background: '#E89611', opacity: '0.9' }}>
            <Box sx={{
                textAlign: 'center'
            }}>
                <Typography variant="h4" component="h2" sx={{ fontSize: '24px', fontWeight: '500', letterSpacing: '0.01em', color: 'black', fontFamily: 'cursive' }}>
                    Create new contact
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
                        id="text"
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
                        id="tel"
                        type="tel"
                        label="Number"
                        name="number"
                        autoComplete="number"
                        value={phone}
                        onChange={handleChange}
                        inputProps={{
                            inputMode: 'numeric', pattern: '\\+?(\\d{1,4}?)[ .\\-]?\\(?\\d{1,3}?\\)?[ .\\-]?\\d{1,4}[ .\\-]?\\d{1,4}[ .\\-]?\\d{1,9}', title: 'Please entry correct number'
                        }}
                        helperText='Example: 11-111-111-111 or +111(111)111-11-11'
                    />
                    <Button type='submit' variant="contained" size="medium" sx={{ width: '50%', mx: 'auto', mt: '10px', fontFamily: 'cursive',fontWeight: '500', letterSpacing: '0.05em', backgroundColor: 'transparent', border: '1px solid #000000', borderRadius: '10px', color: '#000000', '&:hover': { color: '#E89611', border: '1px solid transparent' } }}>ADD CONTACT</Button>
                </Box>
            </Box>
        </Container>
    );
};

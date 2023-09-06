import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {updateContact } from 'redux/contacts/operations';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import { useNavigate, useParams } from 'react-router-dom';


export default function UpdateContactForm() {
    const { items } = useSelector(selectContacts);
    const { contactId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const contact = items.reduce((acc, item) => {
        if (item.id === contactId) {
            acc = item;
        };
        return acc
    }, {});
    const [name, setName] = useState(contact.name);
    const [number, setNumber] = useState(contact.number);
    
    const dataContact = {
        id: contact.id,
        name,
        number,
    };
    const closeModal = () => navigate('/contacts');

    const handleChange = e => {
        const { name, value } = e.target;
 
        switch (name) {
            case 'name':
                setName(value)
                break;
            case 'number':
                setNumber(value)
                break;
    
            default:
                break;
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateContact(dataContact));
        closeModal();
    }

    return (
        <Container maxWidth="xs" sx={{ width: '280px',p: '20px', mt: '10vh', borderRadius: '10px', boxShadow: '0px 0px 12px 5px rgba(232, 150, 17)', background: '#E89611', }}>
            <Box sx={{
                textAlign: 'center'
            }}>
                <Typography variant="h4" component="p" sx={{ fontSize: '16px', fontWeight: '500', letterSpacing: '0.01em', color: 'black', fontFamily: 'cursive' }}>
                    Edit  contact
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
                        id="text"
                        type="text"
                        label="Name"
                        name="name"
                        autoComplete="name"
                        autoFocus
                        value={name}
                        onChange={handleChange}
                        size='small'
                    />
          
                    <TextField
                        margin="normal"
                        id="tel"
                        type="tel"
                        label="Number"
                        name="number"
                        autoComplete="number"
                        value={number}
                        onChange={handleChange}
                        size='small'
                    />
                    <Box sx={{display: 'flex',gap: '10px', mt: '10px'}}>
                        <Button type='submit' variant="contained" size="small" sx={{ width: '50%', fontFamily: 'cursive', fontWeight: '500', letterSpacing: '0.05em', backgroundColor: 'transparent', border: '1px solid #000000', borderRadius: '10px', color: '#000000', '&:hover': { color: '#E89611', border: '1px solid transparent' } }}>SAVE</Button>
                        <Button onClick={closeModal} type='button' variant="contained" size="small" sx={{ width: '50%', fontFamily: 'cursive',fontWeight: '500', letterSpacing: '0.05em', backgroundColor: 'transparent', border: '1px solid #000000', borderRadius: '10px', color: '#000000', '&:hover': { color: '#E89611', border: '1px solid transparent' } }}>CLOSE</Button>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};
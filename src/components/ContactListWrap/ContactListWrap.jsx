import { Box, Container, Typography } from '@mui/material'
import React from 'react'

function ContactListWrap({children}) {
    return (
        <div>
            <Container maxWidth="xs" sx={{ minHeight: '300px', p: '20px', mt: '10vh', borderRadius: '10px', boxShadow: '0px 0px 12px 5px rgba(232, 150, 17,0.8)', background: '#E89611', opacity: '0.9' }}>
                <Box sx={{
                    textAlign: 'center'
                }}>
                    <Typography variant="h4" component="h2" sx={{ fontSize: '24px', fontWeight: '500', letterSpacing: '0.01em', color: 'black', fontFamily: 'cursive' }}>
                        Contacts
                    </Typography>
                {children}
                </Box>
            </Container>
        </div>
    );
};

export default ContactListWrap
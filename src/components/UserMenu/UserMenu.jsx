import React from 'react'

function UserMenu() {

    
    const handleLogOut = async () => {
        try {

        } catch (error) {
            console.log(error)
        }
    };
    return (
        <div>
            <p>Hello, </p>
            <button type='button' onClick={handleLogOut}>Logout</button>
        </div>
    );  
};

export default UserMenu
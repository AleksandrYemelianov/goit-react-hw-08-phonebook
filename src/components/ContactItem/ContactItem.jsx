import React from 'react'
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { deleteContact } from 'redux/contacts/operations';

import css from './ContactItem.module.css';
import { useNavigate } from 'react-router-dom';

function ContactItem({ contact: {id, name, number} }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDeleteContact = () => dispatch(deleteContact(id));

    return (
        <li id={id} className={css.item}>
            <div className={css.wrapElement}>
                <p className={`${css.info} ${css.point}`}>{name}:</p>
                <p className={css.info}>{number}</p>
            </div>
            
            <div className={css.wrapElement}> 
                <button onClick={() => navigate(`/contacts/edit/${id}`)} className={css.btn}><EditNoteIcon sx={{ fontSize: 20 }} /></button>
                <button onClick={() => handleDeleteContact(id)} className={css.btn}><DeleteForeverOutlinedIcon sx={{ fontSize: 20 }} /></button>
            </div>
        </li>
    );
};

ContactItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
};

export default ContactItem
import { useDispatch, useSelector } from 'react-redux';

// import PropTypes from 'prop-types';
import { setFilter } from 'redux/filters/slice';
import { selectFilterValue } from 'redux/contacts/contactsSelectors';
import { Box, TextField } from '@mui/material';

const Filter = () => {
    const filter = useSelector(selectFilterValue);
    const dispatch = useDispatch()
    

    const handleFilter = e => dispatch(setFilter(e.target.value));

    return (
        <Box
            component="form"
            sx={{
                display: 'flex',
                flexDirection: 'column'
            }}>
            <TextField
                margin="normal"
                fullWidth
                id="text"
                type="text"
                label="Find contacts by name"
                name="name"
                value={filter}
                onChange={handleFilter}
            />
        </Box>
        // <label className={css.label}>
        //     Find contacts by name :
        //     <input
        //         className={css.input}
        //         type="text"
        //         value={filter}
        //         onChange={handleFilter}
        //     />
        // </label>
    );
};

export default Filter;
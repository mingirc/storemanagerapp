import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { Grid, Modal, Box, Typography } from '@mui/material';
import upperDirectory from '../helpers/upperDirectory';
import { GrayStyledButton } from './styledButtons';
import { boxStyle } from './Modal.style';

// Customized Modal for all interactions and warnings.
const MyModal = props => {

    const { open, header, content, actions, noAction, cancelRouteStep } = props
    const [ modalOpen, setModalOpen ] = useState(open);
    const navigate = useNavigate();

    const handleClose = () => navigate(upperDirectory(cancelRouteStep))

    useEffect(() => {
        handleOpen();
    }, [])

    const handleOpen = () => setModalOpen(true);

    return ReactDOM.createPortal(
    <Modal open={modalOpen} onClose={handleClose}>
        <Box sx={boxStyle}>
        <h2>
            {header}
        </h2>
        <Typography component={'div'}>
            {content}
        </Typography>
        <Typography component={'div'}>
            {actions ? actions : !noAction && (
                <Grid container sx={{ marginTop: '20px' }}>
                    <Grid item xs={12}>
                        <GrayStyledButton fullWidth type="button" onClick={handleClose}> Ok </GrayStyledButton>
                    </Grid>
                </Grid>
            )}
        </Typography>
        </Box>
    </Modal>, 
    document.querySelector('#modal'))
}

export default MyModal;
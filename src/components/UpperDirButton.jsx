import React from 'react';
import { useNavigate } from 'react-router-dom';
import upperDirectory from '../helpers/upperDirectory';
import { GrayStyledButton } from './styledButtons';

// This button is used on every page except main navigation (highest directory).
const UpperDirButton = props => {

    let navigate = useNavigate();
    const { step } = props

    return (
    <GrayStyledButton 
        style={{ height: '100%' }} 
        onClick={() => navigate(upperDirectory(step))}
    >
        Back
    </GrayStyledButton>
    )

}

export default UpperDirButton;
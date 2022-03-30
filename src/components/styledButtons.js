import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

// Custom styled buttons used all over application.
export const GrayStyledButton = styled(Button)({
    border: '1px solid #C4C4C4',
    color: 'rgba(0, 0, 0, 0.6)',
    textTransform: 'none',
    fontSize: '12pt',
    fontWeight: '200',
    fontFamily: [
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
      ].join(','),
    '&:hover': {
        backgroundColor: '#FFFFFF',
        borderColor: '#212121',
        boxShadow: 'none',
      }
})

export const GrayStyledRedButton = styled(Button)({
    border: '1px solid #C4C4C4',
    color: 'rgba(0, 0, 0, 0.6)',
    textTransform: 'none',
    fontSize: '12pt',
    fontWeight: '200',
    fontFamily: [
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
      ].join(','),
    '&:hover': {
        backgroundColor: '#D22626',
        color: '#FFFFFF',
        borderColor: '#212121',
        boxShadow: 'none',
      }
})

export const GrayStyledGreenButton = styled(Button)({
    border: '1px solid #C4C4C4',
    color: 'rgba(0, 0, 0, 0.6)',
    textTransform: 'none',
    fontSize: '12pt',
    fontWeight: '200',
    fontFamily: [
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
      ].join(','),
    '&:hover': {
        backgroundColor: '#10A124',
        color: '#FFFFFF',
        borderColor: '#212121',
        boxShadow: 'none',
      }
})
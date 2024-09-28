import { IconButton, styled } from "@mui/material";

export const RedIconButton = styled(IconButton)({
    backgroundColor: 'red',
    color: 'white',
    height: '1em',
    width: '1em',
    margin: '0.5em',
    '&:hover': {
        backgroundColor: 'darkred',
    },
});

export const BlueIconButton = styled(IconButton)({
    backgroundColor: 'blue',
    color: 'white',
    height: '1em',
    width: '1em',
    margin: '0.5em',
    '&:hover': {
        backgroundColor: 'darkblue',
    },
});

export const GreenIconButton = styled(IconButton)({
    backgroundColor: 'green',
    color: 'white',
    height: '1em',
    width: '1em',
    margin: '0.5em',
    '&:hover': {
        backgroundColor: 'darkgreen',
    },
});

export const BlackIconButton = styled(IconButton)({
    backgroundColor: 'black',
    color: 'white',
    height: '1em',
    width: '1em',
    margin: '0.5em',
    borderRadius: '50%',
    '&:hover': {
        backgroundColor: 'gray',
    },
});

export const YellowIconButton = styled(IconButton)({
    backgroundColor: 'yellow',
    color: 'black', // Black text for better contrast
    height: '1em',
    width: '1em',
    margin: '0.5em',
    borderRadius: '50%', // Circular shape
    '&:hover': {
        backgroundColor: 'orange', // Slightly darker on hover
    },
});
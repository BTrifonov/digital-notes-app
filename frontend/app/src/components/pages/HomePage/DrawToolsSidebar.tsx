import * as React from 'react';

import { Box, ButtonGroup, IconButton, Popover, Slider, Typography, styled } from "@mui/material";


import LineWeightIcon from '@mui/icons-material/LineWeight';
import ColorLensIcon from '@mui/icons-material/ColorLens';

//TODO: Move the buttons into seperate file
const RedIconButton = styled(IconButton)({
    backgroundColor: 'red',
    color: 'white',
    height: '1em',
    width: '1em',
    margin: '0.5em',
    '&:hover': {
        backgroundColor: 'darkred',
    },
});

const BlueIconButton = styled(IconButton)({
    backgroundColor: 'blue',
    color: 'white',
    height: '1em',
    width: '1em',
    margin: '0.5em',
    '&:hover': {
        backgroundColor: 'darkblue',
    },
});

const GreenIconButton = styled(IconButton)({
    backgroundColor: 'green',
    color: 'white',
    height: '1em',
    width: '1em',
    margin: '0.5em',
    '&:hover': {
        backgroundColor: 'darkgreen',
    },
});

const BlackIconButton = styled(IconButton)({
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

const YellowIconButton = styled(IconButton)({
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

export default function DrawToolsSidebar() {
    const [anchorElColor, setAnchorElColor] = React.useState<null | HTMLElement>(null);
    const [anchorElLineWeight, setAnchorElLineWeight] = React.useState<null | HTMLElement>(null);
    
    const openColorChangePopUp = Boolean(anchorElColor);
    const openLineWeightPopUp = Boolean(anchorElLineWeight);

    function handleColorChange(event: React.MouseEvent<HTMLElement>): void {
        setAnchorElColor(anchorElColor ? null : event.currentTarget);
    }

    function handleLineWeigtChange(event: React.MouseEvent<HTMLElement>): void {
        setAnchorElLineWeight(anchorElLineWeight ? null : event?.currentTarget);
    }

    return (
        <Box
            sx={{
                height: '100%',
                width: '100%' 
            }}
        >

            <IconButton onClick={handleColorChange}>
                <ColorLensIcon/>
            </IconButton>

            <Popover
                open={openColorChangePopUp}
                onClose={() => setAnchorElColor(null)}
                anchorEl={anchorElColor}
                anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'left'
                }}
                transformOrigin={{
                    vertical: 'center',
                    horizontal: 'right'
                }}
            >
                <ButtonGroup
                    orientation='horizontal'
                    variant='text'
                >
                    <BlackIconButton 
                        
                    />
                    <RedIconButton
                        
                    />
                    <BlueIconButton
                        
                    />
                    <GreenIconButton
                        
                    />
                    <YellowIconButton
                       
                    />
                </ButtonGroup>
            </Popover>

            <IconButton onClick={handleLineWeigtChange}>
                <LineWeightIcon/>
            </IconButton>

            <Popover
                open={openLineWeightPopUp}
                onClose={()=>setAnchorElLineWeight(null)}
                anchorEl={anchorElLineWeight}
                anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'left'
                }}
                transformOrigin={{
                    vertical: 'center',
                    horizontal: 'right'
                }}
            >
                <Box
                    sx={{
                        width: '15em', 
                        paddingTop: '1.4em',
                        marginLeft: '0.5em',
                        marginRight: '0.5em'
                    }}
                >
                    <Slider
                        size='small'
                        min={1}
                        max={10}
                        defaultValue={3}
                        aria-label='Small'
                        valueLabelDisplay='auto'
                    />
                </Box>
            </Popover>
        </Box>
    )
}
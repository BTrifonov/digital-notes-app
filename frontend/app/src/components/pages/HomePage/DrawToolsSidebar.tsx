import * as React from 'react';

import { Box, ButtonGroup, IconButton, Popover, Slider, styled } from "@mui/material";


import LineWeightIcon from '@mui/icons-material/LineWeight';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import { DrawToolsSidebarProps } from '../../../types/right-sidebar';

import { BlackIconButton, GreenIconButton, YellowIconButton } from '../../../utils/colorButtons';
import { RedIconButton, BlueIconButton } from '../../../utils/colorButtons';

export default function DrawToolsSidebar({handleColorChange, handleLineWeightChange}:DrawToolsSidebarProps) {
    const [anchorElColor, setAnchorElColor] = React.useState<null | HTMLElement>(null);
    const [anchorElLineWeight, setAnchorElLineWeight] = React.useState<null | HTMLElement>(null);
    
    const openColorChangePopUp = Boolean(anchorElColor);
    const openLineWeightPopUp = Boolean(anchorElLineWeight);

    function triggerColorChange(event: React.MouseEvent<HTMLElement>): void {
        setAnchorElColor(anchorElColor ? null : event.currentTarget);
    }

    function triggerLineWeightChange(event: React.MouseEvent<HTMLElement>): void {
        setAnchorElLineWeight(anchorElLineWeight ? null : event?.currentTarget);
    }

    return (
        <Box
            sx={{
                height: '100%',
                width: '100%' 
            }}
        >

            <IconButton onClick={triggerColorChange}>
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
                        onClick={()=> handleColorChange('black')}
                    />

                    <RedIconButton
                        onClick={() => handleColorChange('red')}    
                    />

                    <BlueIconButton
                        onClick={() => handleColorChange('blue')}    
                    />

                    <GreenIconButton
                        onClick={() => handleColorChange('green')}    
                    />

                    <YellowIconButton
                       onClick={() => handleColorChange('yellow')}
                    />
                </ButtonGroup>
            </Popover>

            <IconButton onClick={triggerLineWeightChange}>
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
                        onChangeCommitted={(event, newVal)=>handleLineWeightChange(newVal as number)}
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
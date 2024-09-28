import { Box, Divider, IconButton} from "@mui/material"

import BorderColorIcon from '@mui/icons-material/BorderColor';

import SaveAsIcon from '@mui/icons-material/SaveAs';

import { DrawNavBarProps } from "../../../types/draw-navbar";

export function DrawNavBar({handleSaveNote, isDialogOpen}: DrawNavBarProps) {
    return (
        <Box
            sx={{
                height: '100%',
                width: '100%', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-evenly'
            }}
        >
            <IconButton>
                <BorderColorIcon/>
            </IconButton>

            <Divider variant="middle"/>
            
            <IconButton onClick={handleSaveNote}>
                <SaveAsIcon/>
            </IconButton>
        </Box>
    )
}
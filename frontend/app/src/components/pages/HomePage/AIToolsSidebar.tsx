import { Box, IconButton } from "@mui/material";

import SmartToyIcon from '@mui/icons-material/SmartToy';

export function AIToolsSidebar() {

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
                <SmartToyIcon/>
            </IconButton>
        </Box>
    )
}
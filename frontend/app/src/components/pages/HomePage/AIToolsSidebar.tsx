import { Box, IconButton } from "@mui/material";

import SmartToyIcon from '@mui/icons-material/SmartToy';

export function AIToolsSidebar() {

    return (
        <Box
            sx={{
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-evenly'
            }}
        >
            <IconButton
                size="small"
            >
                <SmartToyIcon/>
            </IconButton>
        </Box>
    )
}
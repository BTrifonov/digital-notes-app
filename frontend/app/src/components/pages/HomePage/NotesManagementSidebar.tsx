import { Box, IconButton } from "@mui/material";

import SaveAsIcon from '@mui/icons-material/SaveAs';

export default function NotesManagementSidebar() {
    return (
        <Box
            sx={{ 
                display: 'flex',
                flexDirection: 'column', 
                justifyContent:'space-evenly'
            }}
        >
            <IconButton
                size="small"
            >
                <SaveAsIcon/>
            </IconButton>

        </Box>
    )
}
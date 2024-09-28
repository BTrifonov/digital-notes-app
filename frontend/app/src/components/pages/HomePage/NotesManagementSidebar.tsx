import { Box, IconButton } from "@mui/material";

import SaveAsIcon from '@mui/icons-material/SaveAs';

export default function NotesManagementSidebar() {
    return (
        <Box
            sx={{
                height: '100%',
                width: '100%'
            }}
        >
            <IconButton>
                <SaveAsIcon/>
            </IconButton>

        </Box>
    )
}
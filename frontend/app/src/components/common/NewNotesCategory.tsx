import { Box, Button, IconButton, Paper, TextField } from "@mui/material";

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function NewNotesCategory() {

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row'
            }}
        >
                <TextField
                    variant="outlined"
                    id="notes-category"
                    label="notes"
                    placeholder="New note category"
                >

                </TextField>
                <IconButton>
                    <ArrowForwardIcon/>
                </IconButton>  
        </Box>
    )
}
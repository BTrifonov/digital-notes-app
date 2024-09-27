import { Box, Button, DialogActions, TextField } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

import * as React from 'react';
import { DrawNavBarProps } from '../../types/draw-navbar';

export default function SaveNoteDialog({handleSaveNote, isDialogOpen}:DrawNavBarProps) {
 
    
    return (
        <Dialog
            open={isDialogOpen}
            PaperProps={{
                component: 'form',
                onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                    event.preventDefault();
                    const formData = new FormData(event.currentTarget);
                    console.log(formData)
                    handleSaveNote()
                }
            }}
        >
            <Box 
                sx={{
                    display: 'flex', 
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}
            >

                <DialogTitle>Save digital note</DialogTitle>
                <TextField
                    label='Note name'
                    id='note-name'
                    placeholder='Enter note name'
                    variant='outlined'
                >
                </TextField>

                <DialogActions>
                    <Button type="submit">Save</Button>
                </DialogActions>
                
            
            </Box>
        </Dialog>
    )
}
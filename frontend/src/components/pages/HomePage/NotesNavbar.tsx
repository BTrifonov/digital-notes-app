import { Box, IconButton, TextField } from "@mui/material";
import { SimpleTreeView, TreeItem } from "@mui/x-tree-view";

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { AINotesNavbar } from "./AINotesNavbar";

//TODO: Display simple tree with categories of notes
export default function NotesNavbar() {
    return(
        <Box
            sx={{
                height: '100%', 
                width: '100%', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between'
            }}
        >
            <SimpleTreeView>
                <TreeItem itemId='geometry' label='Geometry'>
                    <TreeItem itemId='geometry-note-1' label='First Note'></TreeItem>
                    <TreeItem itemId='geometry-note-2' label='Second Note'></TreeItem>
                    <TreeItem itemId='geometry-note-3' label='Third Note'></TreeItem>
                </TreeItem>

                <TreeItem itemId='algebra' label='Algebra'>
                    <TreeItem itemId="algebra-note-1" label="First Note"></TreeItem>
                    <TreeItem itemId="algebra-note-2" label="Second Note"></TreeItem>
                    <TreeItem itemId="algebra-note-3" label="Third Note"></TreeItem>
                </TreeItem>
            </SimpleTreeView>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row', 
                    justifyContent: 'space-evenly'
                }}
            >
                <TextField
                    variant='outlined'
                    label='Enter new note category'
                >
                </TextField>
                <IconButton>
                    <ArrowForwardIcon/>
                </IconButton>
            </Box>

        </Box>
    )
}
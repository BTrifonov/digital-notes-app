import { Box, Divider } from "@mui/material";
import NotesNavbar from "./NotesNavbar";
import { AINotesNavbar } from "./AINotesNavbar";

export default function LeftSidebar() {
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
            <NotesNavbar/>

            <Divider
                sx={{
                    margin: '1em'
                }}
            />
            
            <AINotesNavbar/>
        </Box>
    )
}
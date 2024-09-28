import { Box, Divider } from "@mui/material";
import DrawToolsSidebar from "./DrawToolsSidebar";
import NotesManagementSidebar from "./NotesManagementSidebar";
import { AIToolsSidebar } from "./AIToolsSidebar";
import { RightSidebarProps } from "../../../types/right-sidebar";


/**
TODO: This component acts as container for the following React components:
    1. DrawToolsNavBar
    2. NotesManagementSidebar
    3. AIToolsSidebar    

*/
export default function RightSidebar({handleColorChange, handleLineWeightChange}: RightSidebarProps) {
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

            <DrawToolsSidebar handleColorChange={handleColorChange} handleLineWeightChange={handleLineWeightChange}/>

            <Divider
                sx={{
                    margin: '1em'
                }}
            />


            <NotesManagementSidebar/>

            <Divider
                sx={{
                    margin: '1em'
                }}
            />

            <AIToolsSidebar/>
        </Box>
    )
}
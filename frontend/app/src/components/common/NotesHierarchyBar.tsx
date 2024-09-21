import { Box, Button, ButtonGroup, Drawer, Toolbar } from "@mui/material"
import { NotesHierarchyBarProps } from "../../types/global";


export default function NotesHierarchyBar({open}:NotesHierarchyBarProps) {
    const drawerWidth = `${(2 / 12) * 100}%`;
    return (
        <Drawer
            anchor='left'
            variant="persistent"
            open={open}
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}
        >
            <Toolbar/>
            <Box sx={{width: '100%', height: '100%', overflow: 'auto', bgcolor: 'red', borderRadius: '1em'}}>
                <ButtonGroup
                    orientation="vertical"
                >
                    <Button>
                        A
                    </Button>
                
                    <Button>
                        B
                    </Button>
                    <Button>
                        C
                    </Button>
                </ButtonGroup> 
            </Box>
        </Drawer>
    )
}
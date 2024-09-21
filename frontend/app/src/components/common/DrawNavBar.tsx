import { Box, Button, ButtonGroup, Drawer, Toolbar } from "@mui/material"

export function DrawNavBar() {
    const drawerWidth = `${(1 / 12) * 100}%`;

    return (
        <Drawer
        anchor="right"
        variant="persistent"
        sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
    >
        <Toolbar/>
        <Box sx={{width: '100%', height: '100%', overflow: 'auto', bgcolor: 'lightblue', borderRadius: '1em'}}>
            <ButtonGroup
                orientation="vertical"
            >
                <Button>
                    D1
                </Button>
            
                <Button>
                    D2
                </Button>
                <Button>
                    D3
                </Button>
            </ButtonGroup> 
        </Box>
    </Drawer>
    )
}
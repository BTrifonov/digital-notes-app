import { Box } from "@mui/material";

import { SimpleTreeView, TreeItem } from "@mui/x-tree-view";

export function AINotesNavbar() {
    return(
        <Box
            sx={{
                height: '100%', 
                width: '100%', 
                display: 'flex', 
                flexDirection: 'column', 
                overflow: 'scroll'
            }}
        >
            <SimpleTreeView>
                <TreeItem itemId='ai-geometry' label='AI Geometry'>
                    <TreeItem itemId='ai-geometry-note-1' label='First Note'></TreeItem>
                    <TreeItem itemId='ai-geometry-note-2' label='Second Note'></TreeItem>
                    <TreeItem itemId='ai-geometry-note-3' label='Third Note'></TreeItem>
                </TreeItem>

                <TreeItem itemId='ai-algebra' label='AI Algebra'>
                    <TreeItem itemId="ai-algebra-note-1" label="First Note"></TreeItem>
                    <TreeItem itemId="ai-algebra-note-2" label="Second Note"></TreeItem>
                    <TreeItem itemId="ai-algebra-note-3" label="Third Note"></TreeItem>
                </TreeItem>
            </SimpleTreeView>
    </Box>
    )
}
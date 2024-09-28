import { Box, useTheme } from "@mui/material";
import { NotesHierarchyBarProps } from "../../types/global";

import { NewNotesCategorySubmit } from "../../types/global";

import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from "@mui/x-tree-view";
import NewNotesCategory from "./NewNotesCategory";


export default function NotesHierarchyBar() {
    // TODO: Do I need this?
    return (
      <Box
        sx={{
            height: '100%',
            width: '100%', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between'
        }}
        >
            <SimpleTreeView
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <TreeItem itemId="Math" label="Math notes">
                    <TreeItem itemId="notes_1" label="label_1">

                    </TreeItem>
                    <TreeItem itemId="notes_2" label="label_2">

                    </TreeItem>
                    <TreeItem itemId="notes_3" label="label_3">
                        
                    </TreeItem>
                </TreeItem>
                <TreeItem itemId="Literature" label="Literature notes">
                    <TreeItem itemId="notes_3" label="label_3"></TreeItem>
                    <TreeItem itemId="notes_4" label="label_4"></TreeItem>
                    <TreeItem itemId="notes_5" label="label_5"></TreeItem>
                </TreeItem>
            </SimpleTreeView>

            <NewNotesCategory>

            </NewNotesCategory>
      </Box>
    )
}
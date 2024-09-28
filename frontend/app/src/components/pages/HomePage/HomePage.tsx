import * as React from 'react';
import {Grid2, useTheme } from '@mui/material';

import TopNavbar from '../../common/TopNavbar';
import { ButtonAppBarProps } from '../../../types/navbar';

import DrawCanvas from './DrawCanvas';

import SaveNoteDialog from './SaveNoteDialog';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';


//TODO: Read through the documentation how to work with spacing in grid v2
export default function HomePage({ handleThemeToggle, isDarkMode }: ButtonAppBarProps) {
  const theme = useTheme();
  
  const [saveNoteTriggered, setSaveNoteTrigger] = React.useState(false)

  // default value of the canvas should be the full width
  const [isNotesMenuOpen, setIsNotesMenuOpen] = React.useState<boolean>(false);

  const handleNotesMenuToggle = () => {
    setIsNotesMenuOpen(!isNotesMenuOpen);
  }

  const handleSaveNoteRequest = () => {
    //TODO: Other than closing the dialog, one should here persist the digital note
    setSaveNoteTrigger((prev)=> !prev);
  }

  return (
    <Grid2 
      container 
      display={'flex'} 
      style={{height: '100vh'}} 
      //TODO: Inspect if justify content has any effect
      justifyContent={'space-between'} 
      flexDirection={'column'} 
      rowSpacing={8}
      columnSpacing={0.5}
    >
      <Grid2 size={12}>
        <TopNavbar handleThemeToggle={handleThemeToggle} isDarkMode={isDarkMode} isAuth={true} handleNotesMenuToggle={handleNotesMenuToggle}/>
      </Grid2>

      <Grid2 container display={'flex'} sx={{flexGrow:1}}>
          <Grid2 
          size={isNotesMenuOpen ? 2 : 0}
          sx={{
            borderRadius: '1em', 
            bgcolor: theme.palette.background.paper
          }} 
        >
          {isNotesMenuOpen && <LeftSidebar/>}
        </Grid2>

        <Grid2 
          size={isNotesMenuOpen ? 9 : 11} 
          sx={{
            borderRadius: '1em',
            bgcolor: theme.palette.background.paper
          }}
        >
          <DrawCanvas />
        </Grid2>

        <Grid2 
          size={0.5} 
          sx={{
            borderRadius: '1em', 
            bgcolor: theme.palette.background.paper
          }}
        >
          <RightSidebar/>
        </Grid2>
      </Grid2>

      <SaveNoteDialog handleSaveNote={handleSaveNoteRequest} isDialogOpen={saveNoteTriggered}/>
    </Grid2>


);
}

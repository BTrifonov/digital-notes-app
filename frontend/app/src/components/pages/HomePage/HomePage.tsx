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

  /**
   * Drawing states
   */
  const [drawColor, setDrawColor] = React.useState<string>('black');
  const [lineWeight, setLineWeight] = React.useState<number>(5);

  /**
   * Managing notes states
   */
  const [saveNoteTriggered, setSaveNoteTriggered] = React.useState<boolean>(false);


  /**
   * Layout states
   */
  const [isNotesMenuOpen, setIsNotesMenuOpen] = React.useState<boolean>(false);

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
        <TopNavbar 
          handleThemeToggle={handleThemeToggle} 
          isDarkMode={isDarkMode} 
          isAuth={true} 
          handleNotesMenuToggle={()=>setIsNotesMenuOpen((prev)=>!prev)}/>
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
            height: '1500',
            borderRadius: '1em',
            bgcolor: theme.palette.background.paper
          }}
          overflow={'scroll'}
        >
          <DrawCanvas color={drawColor} lineWeight={lineWeight}/>
        </Grid2>

        <Grid2 
          size={0.5} 
          sx={{
            borderRadius: '1em', 
            bgcolor: theme.palette.background.paper
          }}
        >
          <RightSidebar handleColorChange={setDrawColor} handleLineWeightChange={setLineWeight}/>
        </Grid2>
      </Grid2>

      <SaveNoteDialog 
        handleSaveNote={()=>setSaveNoteTriggered((prev)=>!prev)} 
        isDialogOpen={saveNoteTriggered}
      />
    </Grid2>
);
}

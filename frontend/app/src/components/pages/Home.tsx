import * as React from 'react';
import { Box, Grid2,  Stack,  useTheme } from '@mui/material';
import ButtonAppBar from '../common/ButtonAppBar';
import { ButtonAppBarProps } from '../../types/navbar';
import NotesHierarchyBar from '../common/NotesHierarchyBar';
import DrawCanvas from '../common/DrawCanvas';

export default function HomePage({ handleThemeToggle, isDarkMode }: ButtonAppBarProps) {
  const theme = useTheme();

  // default value of the canvas should be the full width
  const [isNotesMenuOpen, setIsNotesMenuOpen] = React.useState<boolean>(false);

  const handleNotesMenuToggle = () => {
    setIsNotesMenuOpen(!isNotesMenuOpen);
  }

  return (
    <Grid2 container display={'flex'} style={{height: '100vh'}} justifyContent={'space-evenly'} flexDirection={'column'}>
    <Grid2 
      size={12}
    >
      <ButtonAppBar handleThemeToggle={handleThemeToggle} isDarkMode={isDarkMode} isAuth={true} handleNotesMenuToggle={handleNotesMenuToggle}/>
    </Grid2>

    <Grid2 container display={'flex'} sx={{flexGrow:1}}>
        <Grid2 
        size={isNotesMenuOpen ? 2 : 0} 
      >
        <Box sx={{height: '100%', width: '100%', bgcolor: 'red'}}></Box>
        {/* <NotesHierarchyBar open={isNotesMenuOpen}/> */}
      </Grid2>

      <Grid2 
        size={isNotesMenuOpen ? 9 : 11} 
        sx={{
          bgcolor: theme.palette.background.paper
        }}
      >
        <DrawCanvas />
      </Grid2>

      <Grid2 
        size={0.8} 
        sx={{
          borderRadius: '1em'
        }}
      >
        <Box sx={{height: '100%', width: '100%', bgcolor: 'red'}}>
        </Box>
      </Grid2>
    </Grid2>
  </Grid2>
  );
}

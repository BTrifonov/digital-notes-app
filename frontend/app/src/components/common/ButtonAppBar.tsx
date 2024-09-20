import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';


import CalculateIcon from '@mui/icons-material/Calculate';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { ButtonAppBarProps } from '../../types/navbar';

export default function ButtonAppBar({handleThemeToggle, isDarkMode, isAuth}:ButtonAppBarProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar 
          variant='dense'
          disableGutters
          sx={{
            display: 'flex', 
            justifyContent: isAuth ? 'space-between' : 'end'
          }}
        >
          {isAuth &&
          <IconButton>
            <CalculateIcon />
          </IconButton>}
          <IconButton
            sx={{marginLeft: '3em'}}
            onClick={handleThemeToggle}
          >
            {isDarkMode ? <LightModeIcon/> : <DarkModeIcon/>}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

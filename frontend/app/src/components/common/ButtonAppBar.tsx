import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from "@mui/material";
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavbarProps } from '../../types/global';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function ButtonAppBar({handleThemeToggle, isDarkMode}:NavbarProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar 
          disableGutters
          sx={{
            display: 'flex', 
            justifyContent: 'end'
          }}
        >
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

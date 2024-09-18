import { CssBaseline, ThemeProvider, Button } from '@mui/material';
import './App.css';
import { useState } from 'react';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import { darkTheme, lightTheme } from './theme';
import AppRoutes from './AppRoutes';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const handleThemeToggle = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CssBaseline />
        <Button
          onClick={handleThemeToggle}
          sx={{
            position: 'fixed',
            top: '0',
            right: '0',
            zIndex: 10, // Make sure it's above other elements
            margin: '0.5rem', // Optional margin to give some space from the edges
          }}
        >
          {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </Button>
        <AppRoutes />
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;

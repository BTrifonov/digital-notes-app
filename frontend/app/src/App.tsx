import { CssBaseline, ThemeProvider, Button } from '@mui/material';
import './App.css';
import { useState } from 'react';

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
        <AppRoutes handleThemeToggle={handleThemeToggle} isDarkMode={isDarkMode} isAuth={false}/>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;

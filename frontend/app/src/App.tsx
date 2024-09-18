
import { Container, CssBaseline, ThemeProvider, Button } from '@mui/material'
import './App.css'
import LoginPage from './components/pages/LoginPage'
import { useState } from 'react'

import { darkTheme, lightTheme } from './theme'

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const handleThemeToggle = () => {
    setIsDarkMode(prevMode => !prevMode)
  };


  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      
      <Button onClick={handleThemeToggle}>
        Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
      </Button>
      <Container
        sx={{
          marginTop: '20%',
          marginBottom: '20%',
          width: '40%', 
          height: 'auto', 
          borderRadius: '10px', 
          borderStyle: 'outset',
          backgroundColor: theme => theme.palette.background.paper
        }}
      > 
        <LoginPage/>
      </Container>
    </ThemeProvider>
  )
}

export default App

// theme.tsx
import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          margin: '1em' // Adds margin to all TextFields
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          margin: '1rem', // Adds margin to all Buttons
          borderRadius: '8px', // Example: Rounded corners for buttons
          textTransform: 'none', // Disables uppercase text on buttons
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          margin: '1em'
        }
      }
    }
  },
  palette: {
    mode: 'light',  // Light mode
    primary: {
      main: '#42a5f5',  // A vibrant blue for primary buttons, links, etc.
    },
    secondary: {
      main: '#ff4081',  // A bright pink for secondary actions
    },
    background: {
      default: '#fce4ec',  // Warm, soft pink background (a warm, inviting tone)
      paper: '#f5f5f5',    // Soft off-white for paper surfaces
    },
    text: {
      primary: '#212121',  // Dark gray for primary text, ensures readability
      secondary: '#757575',  // Medium gray for secondary text, subtitles, etc.
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',  // Modern, readable font
    h5: {
      fontWeight: 600,  // Slightly bolder headings for emphasis
    },
    body1: {
      fontSize: '1rem',
    },
  },
});

export const darkTheme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          margin: '1em' // Adds margin to all TextFields
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          margin: '1em', // Adds margin to all Buttons
          borderRadius: '8px', // Example: Rounded corners for buttons
          textTransform: 'none', // Disables uppercase text on buttons
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          margin: '1em'
        }
      }
    }
  },
  palette: {
    mode: 'dark',  // Dark mode
    primary: {
      main: '#90caf9',  // Primary color for buttons, active states, etc.
    },
    secondary: {
      main: '#f48fb1',
    },
    background: {
      //default: '#1c1c1e',  // Chat background color (dark gray)
      //paper: '#2c2c2e',    // Input field background color (slightly lighter gray)
      default: '#2d2d30',  // Brighter dark gray for the main background
      paper: '#38383b',    // Slightly brighter gray for elevated surfaces
    },
    text: {
      primary: '#ffffff',  // White text
      secondary: 'rgba(255, 255, 255, 0.7)',  // Slightly muted white for secondary text
    },
  },
  shape: {
    borderRadius: 10 // Default border radius for all components
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',  // Modern, readable font
    h5: {
      fontWeight: 600,  // Slightly bolder headings for emphasis
    },
    body1: {
      fontSize: '1rem',
    },
  },
});

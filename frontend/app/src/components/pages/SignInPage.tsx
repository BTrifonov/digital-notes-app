import { AppBar, Box, Button, ButtonGroup, Container, Divider, Link,TextField, Typography, useTheme } from "@mui/material";

import { useNavigate } from "react-router-dom";

import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import ButtonAppBar from "../common/ButtonAppBar";
import { NavbarProps } from "../../types/global";

export default function LoginPage({handleThemeToggle, isDarkMode}: NavbarProps) {
  const theme = useTheme();
  const navigate = useNavigate();

  function handleSubmit() {
    //Redirect
    navigate('/home-page')
  }

  function handleCreateAccount() {
    navigate('/sign-up');
  }

  return (
    <Container disableGutters maxWidth={false}>
      <ButtonAppBar handleThemeToggle={handleThemeToggle} isDarkMode={isDarkMode}/>
      <Container
      sx={{
      marginTop: '20%',
      marginBottom: '20%',
      width: '40%', 
      height: 'auto'
      }}
      > 
        <Box
          sx= {{
            display: "flex",
            flexDirection: "column", 
            bgcolor: theme.palette.background.paper,
            borderStyle: "hidden", 
            borderRadius: "2%"
          }}
        >
          <Typography variant="h5">Sign in</Typography>
          <TextField id="filled-basic" label="Email" variant="outlined" />
          <TextField id="user-password" label="Password" helperText="Minimum 8 characters" type="password" variant="outlined" />
          <Button variant="contained" onClick={handleSubmit}>Submit</Button>

          <Link onClick= {handleCreateAccount}  underline="hover">
            Create account
          </Link>
      
          <Divider orientation="horizontal" variant="middle" textAlign="center">OR</Divider>
      
          <ButtonGroup 
            variant="text"
            fullWidth
          >
            <Button sx={{margin: 0}}><GoogleIcon/></Button>
            <Button sx={{margin: 0}}><FacebookIcon/></Button>
            <Button sx={{margin: 0}}><GitHubIcon/></Button>
          </ButtonGroup>
        </Box>
      </Container>
    </Container>
  );
}

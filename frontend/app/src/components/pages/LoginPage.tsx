import { Box, Button, ButtonGroup, Divider, TextField, Typography } from "@mui/material";

import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function LoginPage() {
  return (
    <Box
      sx= {{
        display: "flex",
        flexDirection: "column"
      }}
    >
        <Typography color="secondary" sx={{margin: '1em'}} variant="h5">Sign in</Typography>
        
        
        <TextField sx={{margin: '1em'}} id="filled-basic" label="Email" variant="outlined" />
        <TextField sx={{margin: '1em'}} id="user-password" label="Password" type="password" variant="outlined" />
        <Button sx={{margin: '1em'}} variant="contained">Submit</Button>
        <Typography sx={{margin: '0.5em'}} variant="subtitle1">No registration. Create.</Typography>
    
        <Divider orientation="horizontal" variant="middle" textAlign="center">OR</Divider>
    
        <ButtonGroup 
          variant="text"
          fullWidth
        >
          <Button><GoogleIcon/></Button>
          <Button><FacebookIcon/></Button>
          <Button><GitHubIcon/></Button>
        </ButtonGroup>
    </Box>
  );
}

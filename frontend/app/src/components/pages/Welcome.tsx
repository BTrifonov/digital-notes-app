import { Box, Button, Grid2, Typography } from "@mui/material";
import ButtonAppBar from "../common/ButtonAppBar";
import { ButtonAppBarProps } from "../../types/navbar";


import logo from '../../assets/logo.svg'

import '@fontsource/dancing-script'
import { useNavigate } from "react-router-dom";

//TODO: Remove disableGutters maxWidth={false}
export default function WelcomePage({handleThemeToggle, isDarkMode}: ButtonAppBarProps ) {
    const navigate = useNavigate()

    function handleSignIn() {
        navigate('/sign-in')
    }


    function handleSignUp() {
        navigate('/sign-up')
    }

    return (
        <Grid2 container spacing={3}>
           <Grid2 size={12}>
           <ButtonAppBar 
                handleThemeToggle={handleThemeToggle} 
                isDarkMode={isDarkMode} 
                isAuth={false} />
           </Grid2>
           <Grid2 size={12}>
                <Typography
                    sx={{
                        fontFamily: 'Dancing Script, cursive' 
                    }}
                    variant="h4"
                >
                    Welcome to your digital notes AI assistant :)
                </Typography>
           </Grid2>
           <Grid2 size={12}>
            <Box
                component="img"
                src={logo}
                alt="Sample Image"
                sx={{
                    display: 'block',
                    marginLeft: 'auto', 
                    marginRight: 'auto', 
                    width: '50%',
                    height: '50vh', 
                    borderRadius: '5em', 
                    borderStyle: 'hidden'
                }}
                >
                </Box>
           </Grid2>
           <Grid2 size={12}>
            <Button onClick={handleSignUp} size='large' variant="contained">
                Sign up
            </Button>
            <Button onClick={handleSignIn} size='large' variant="contained">
                Sign in
            </Button>
           </Grid2>
        </Grid2>
    )
}
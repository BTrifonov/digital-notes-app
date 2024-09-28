import * as React from 'react'

import {Box, Button, Container, TextField, Typography, useTheme} from "@mui/material"
import { DatePicker } from '@mui/x-date-pickers';

import Checkbox from '@mui/material/Checkbox';
import ButtonAppBar from '../common/ButtonAppBar';
import { ButtonAppBarProps } from '../../types/navbar';

export default function SignUpPage({handleThemeToggle, isDarkMode}:ButtonAppBarProps) {
    const theme = useTheme();

    const [checked, setChecked] = React.useState<boolean>(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    }

    return (
        <Container disableGutters maxWidth={false}>
            <ButtonAppBar handleThemeToggle={handleThemeToggle} isDarkMode={isDarkMode} isAuth={false}/>
            <Container
                sx={{
                    marginTop: "15%",  
                    width: "50%"
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
                    <Typography variant='h5'>Sign up</Typography>
                    
                    <TextField id="sign-up-first-name" label="First Name" variant='outlined'></TextField>
                    <TextField id="sign-up-last-name" label="Last Name" variant='outlined'></TextField>
                    
                    <DatePicker 
                        label="Birth date"
                    >
                    </DatePicker>

                    <Box
                        sx = {{
                            display: 'flex', 
                            flexDirection: 'row'
                        }}
                    >
                        <Checkbox
                            checked={checked}
                            onChange={handleChange}
                        /> 
                        <Typography variant='subtitle1'> I accept the terms of use</Typography>
                    </Box>
                    <Button variant='contained'> Sign Up</Button>
                </Box>
            </Container>    
        </Container>
    )
}
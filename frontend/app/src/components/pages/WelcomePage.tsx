import { Container, Typography } from "@mui/material";
import { NavbarProps } from "../../types/global";
import ButtonAppBar from "../common/ButtonAppBar";

export default function WelcomePage({handleThemeToggle, isDarkMode}: NavbarProps ) {
    return (
        <Container disableGutters maxWidth={false}>
            <ButtonAppBar handleThemeToggle={handleThemeToggle} isDarkMode={isDarkMode} />
            <Typography>
                Welcome to the digital notes AI assistant :)
            </Typography>
        </Container>
    )
}
import { AuthProps } from "./global";


export interface NavBarProps {
    handleThemeToggle: () => void;
    isDarkMode: boolean;
    handleNotesMenuToggle?: () => void;
}


export interface ButtonAppBarProps extends NavBarProps, AuthProps {}
import { AuthProps } from "./global";


export interface NavBarProps {
    handleThemeToggle: () => void;
    isDarkMode: boolean
}

export interface ButtonAppBarProps extends NavBarProps, AuthProps {}
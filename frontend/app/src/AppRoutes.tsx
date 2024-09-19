import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './components/pages/SignInPage';
import SignUpPage from './components/pages/SignUpPage';
import HomePage from './components/pages/HomePage';
import WelcomePage from './components/pages/WelcomePage';
import { NavbarProps } from './types/global';


export default function AppRoutes({handleThemeToggle, isDarkMode}: NavbarProps) {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<WelcomePage handleThemeToggle={handleThemeToggle} isDarkMode={isDarkMode}/>}/>
                <Route path='/sign-in' element={<LoginPage handleThemeToggle={handleThemeToggle} isDarkMode={isDarkMode}/>}/>
                <Route path='/sign-up' element={<SignUpPage handleThemeToggle={handleThemeToggle} isDarkMode={isDarkMode}/>}/>
                <Route path='/home-page' element={<HomePage handleThemeToggle={handleThemeToggle} isDarkMode={isDarkMode}/>}/>
            </Routes>
        </Router>
    )
};

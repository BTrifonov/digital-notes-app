import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './components/pages/SignInPage';
import SignUpPage from './components/pages/SignUpPage';
import HomePage from './components/pages/HomePage';
import WelcomePage from './components/pages/WelcomePage';
import { NavbarProps } from './types/global';

import HomePage from './components/pages/HomePage';
import WelcomePage from './components/pages/WelcomePage';

export default function AppRoutes({handleThemeToggle, isDarkMode}: NavbarProps) {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<WelcomePage/>}/>
                <Route path='/sign-in' element={<LoginPage/>}/>
                <Route path='/sign-up' element={<SignUpPage/>}/>
                <Route path='/home-page' element={<HomePage/>}/>
                <Route path='/' element={<WelcomePage handleThemeToggle={handleThemeToggle} isDarkMode={isDarkMode}/>}/>
                <Route path='/sign-in' element={<LoginPage handleThemeToggle={handleThemeToggle} isDarkMode={isDarkMode}/>}/>
                <Route path='/sign-up' element={<SignUpPage handleThemeToggle={handleThemeToggle} isDarkMode={isDarkMode}/>}/>
                <Route path='/home-page' element={<HomePage handleThemeToggle={handleThemeToggle} isDarkMode={isDarkMode}/>}/>
            </Routes>
        </Router>
    )
};

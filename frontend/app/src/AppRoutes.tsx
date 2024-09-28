import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './components/pages/LoginPage/LoginPage';
import SignUpPage from './components/pages/SignUpPage/SignUpPage';

import HomePage from './components/pages/HomePage/HomePage';
import WelcomePage from './components/pages/WelcomePage/WelcomePage';
import { ButtonAppBarProps } from './types/navbar';

export default function AppRoutes({handleThemeToggle, isDarkMode}: ButtonAppBarProps) {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<WelcomePage handleThemeToggle={handleThemeToggle} isDarkMode={isDarkMode} isAuth={false}/>}/>
                <Route path='/sign-in' element={<LoginPage handleThemeToggle={handleThemeToggle} isDarkMode={isDarkMode} isAuth={false}/>}/>
                <Route path='/sign-up' element={<SignUpPage handleThemeToggle={handleThemeToggle} isDarkMode={isDarkMode} isAuth={false}/>}/>
                
                <Route path='/home-page' element={<HomePage handleThemeToggle={handleThemeToggle} isDarkMode={isDarkMode} isAuth={true}/>}/>
            </Routes>
        </Router>
    )
};

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/pages/LoginPage';
import SignUp from './components/pages/SignUpPage';

import Home from './components/pages/HomePage';
import Welcome from './components/pages/WelcomePage';
import { ButtonAppBarProps } from './types/navbar';

export default function AppRoutes({handleThemeToggle, isDarkMode}: ButtonAppBarProps) {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Welcome handleThemeToggle={handleThemeToggle} isDarkMode={isDarkMode} isAuth={false}/>}/>
                <Route path='/sign-in' element={<Login handleThemeToggle={handleThemeToggle} isDarkMode={isDarkMode} isAuth={false}/>}/>
                <Route path='/sign-up' element={<SignUp handleThemeToggle={handleThemeToggle} isDarkMode={isDarkMode} isAuth={false}/>}/>
                
                <Route path='/home-page' element={<Home handleThemeToggle={handleThemeToggle} isDarkMode={isDarkMode} isAuth={true}/>}/>
            </Routes>
        </Router>
    )
};

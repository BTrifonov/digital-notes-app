import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './components/pages/LoginPage';
import SignUpPage from './components/pages/SignUpPage';
import HomePage from './components/pages/HomePage';
import WelcomePage from './components/pages/WelcomePage';

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<WelcomePage/>}/>
                <Route path='/sign-in' element={<LoginPage/>}/>
                <Route path='/sign-up' element={<SignUpPage/>}/>
                <Route path='/home-page' element={<HomePage/>}/>
            </Routes>
        </Router>
    )
};

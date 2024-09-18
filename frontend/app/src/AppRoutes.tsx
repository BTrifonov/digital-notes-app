import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './components/pages/LoginPage';
import SignUpPage from './components/pages/SignUpPage';

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<LoginPage/>}/>
                <Route path='/signup' element={<SignUpPage/>}/>
            </Routes>
        </Router>
    )
};

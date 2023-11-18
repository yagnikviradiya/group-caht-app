// Routes.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ChatBoard from './container/ChatBoard';
import Register from './container/Register';

const AppRoutes = () => {

    return (
        <Router>
            <Routes>
                <Route exact={true} path="/" element={<Register />} />
                <Route path="/chat" element={<ChatBoard />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;

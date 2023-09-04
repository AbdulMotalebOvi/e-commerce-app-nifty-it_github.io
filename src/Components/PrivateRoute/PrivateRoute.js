import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useCookieContext } from '../Shared/Context/CookiesContext/CookieProvider.js';

const PrivateRoute = ({ children }) => {
    const { user } = useCookieContext();
    const location = useLocation();

    if (Object.keys(user).length !== 0 && user) {
        return children;
    } else {
        return <Navigate to="/Login" state={{ from: location }} replace />;
    }
};

export default PrivateRoute;

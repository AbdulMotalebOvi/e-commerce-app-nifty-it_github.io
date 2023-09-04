import React, { createContext, useState, useContext } from 'react';
import Cookies from 'universal-cookie';

const CookieContext = createContext();

export const useCookieContext = () => {
    return useContext(CookieContext);
};

export const CookieProvider = ({ children }) => {
    const [token, setToken] = useState('');
    const [user, setUser] = useState({});
    const cookies = new Cookies();

    const setJwtCookie = (jwtToken) => {
        cookies.set('jwt-authorization', jwtToken, {
            path: '/',
            expires: new Date(Date.now() + 2592000),
        });
    };

    const removeJwtCookie = () => {
        cookies.remove('jwt-authorization', { path: '/' });
        setUser({})
    };

    const getJwtCookie = () => {
        return cookies.get('jwt-authorization');
    };

    return (
        <CookieContext.Provider
            value={{ token, setToken, user, setUser, cookies, setJwtCookie, removeJwtCookie, getJwtCookie }}
        >
            {children}
        </CookieContext.Provider>
    );
};

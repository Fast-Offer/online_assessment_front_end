import React, { useState, createContext } from 'react';
import { useHistory } from 'react-router-dom';

const AuthContext = createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
    const history = useHistory();

    const isAuth = localStorage.getItem('isAuth') === 'true';

    const [authState, setAuthState] = useState(isAuth);

    const setAuthInfo = (currentAuth) => {
        localStorage.setItem('isAuth', currentAuth);

        setAuthState(currentAuth);
    }

    const logout = () => {
        localStorage.removeItem('isAuth');
        setAuthState('false');
        history.push('/login');
        
    }

    const isAuthenticated = () => (
        authState === 'true'
    )

    return (
        <Provider value={{
            authState,
            setAuthState: authInfo => setAuthInfo(authInfo),
            logout,
            isAuthenticated
        }}>
            {children}
        </Provider>
    )
}

export {AuthContext, AuthProvider};
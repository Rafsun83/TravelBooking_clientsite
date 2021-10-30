import React, { createContext } from 'react';
import UseFirebase from '../Hooks/UseFirebase';

export const AuthContext = createContext();

const Authprovider = ({ children }) => {

    const allcontext = UseFirebase();
    return (


        <AuthContext.Provider value={allcontext}>
            {children}
        </AuthContext.Provider>

    );
};

export default Authprovider;
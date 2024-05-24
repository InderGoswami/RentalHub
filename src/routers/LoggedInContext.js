import React, { createContext, useState, useContext } from "react";

// Create the context
const LoggedInContext = createContext();

// Create a provider component
export const LoggedInProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <LoggedInContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </LoggedInContext.Provider>
    );
};

// Create a custom hook to use the context
export const useLoggedIn = () => {
    return useContext(LoggedInContext);
};

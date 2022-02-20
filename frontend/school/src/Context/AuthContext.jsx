import React, { useState } from 'react'
import { createContext } from 'react'

const AuthContext = createContext();

const AuthcontextProvider = ({ children }) => {
    const [token, setToken] = useState()
    return (
        <AuthContext.Provider value={{ token, setToken }}>{children}</AuthContext.Provider>
    )
}

export { AuthContext, AuthcontextProvider }
import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
      token: localStorage.getItem('token') || '',
      data: {},
    });
    
    const login = ( auth )=> {
      localStorage.setItem('token', auth.token);
      setAuth(auth)
    }

    const logout = ()=> {
      localStorage.removeItem('token');
      setAuth({}) 
      }

    return (
        <AuthContext.Provider value={{auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;

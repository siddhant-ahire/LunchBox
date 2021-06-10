import React, { useState, useContext } from "react";
const AuthContext = React.createContext(undefined);


export const ThemeProvider = ({children}) => {
    const [auth, setAuth] = useState(false);
    const [navbar, setNavbar] = useState(false);

    const handleAuth = () => {
        setAuth(auth => {
            if(auth){
                document.documentElement.setAttribute('data-theme', 'light');
                return false
              }else{
                document.documentElement.setAttribute('data-theme', 'dark');
                return true
              }
      });
    };
    const handleNavbar = () => {
        setNavbar(!navbar);
    }
    const data = [auth, handleAuth, navbar, handleNavbar];
    return <AuthContext.Provider value={data}>{children}  </AuthContext.Provider>;
  };
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
      throw new Error("useAuth can only be used inside AuthProvider");
    }
    return context;
  };

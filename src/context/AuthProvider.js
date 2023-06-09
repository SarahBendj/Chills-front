import { createContext, useState } from "react";

// const AuthContext = createContext({});

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
   

//   const login = (token) => {
//     if(token) { localStorage.setItem("token", token);
//     setUser({token });
//     } else {
//       return response.json(400);
//     }
    
//   };

//   const logout = () => {
//     localStorage.removeItem("token");
//     setUser({token: "" });
//   };
// console.log(login)
//   return (
//     <AuthContext.Provider value={{ user ,login ,logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
//*****************************************TRY NUMBER 5865 */
 const AuthContext = createContext({});

 export const AuthProvider = ({children}) => {
  const [ auth ,setAuth ] = useState({
    token: localStorage.getItem('token') || '',
    data: {},
  });

  const login = (token) => {
    if(token) { localStorage.setItem("token", token);
    setAuth(token );
    } else {
      return response.json(400);
    }
    
  };

  const logout = () => {
    localStorage.removeItem("token");
    setAuth('');
  };

  return (
    <AuthContext.Provider  value = {{ auth , login, logout}}>
      {children}
    </AuthContext.Provider>
  )
 };


export default  AuthContext ;


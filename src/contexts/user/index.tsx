import React, {createContext, useContext, useState} from 'react';

export const UserContext = createContext<string>('');

export const UserProvider = ({children}) => {
  const [userToken, setUser] = useState('');

  const login = (userData: string) => setUser(userData);
  const logout = () => setUser('');

  return (
    <UserContext.Provider value={{userToken, login, logout}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

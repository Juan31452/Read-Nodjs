import React, { createContext,useState } from 'react';


const ContextoUsuario = createContext();

const initialUser = {id:1,correo:'jluis@gmail.com'}
const UserProvider = ({children}) => {
  const  [ usuario, setUsuario] = useState(initialUser)

   const data = {usuario} 
   return (
      <ContextoUsuario.Provider value={data}>
          {children}
      </ContextoUsuario.Provider>

   )

}
export {UserProvider}
export default ContextoUsuario
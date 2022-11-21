import React, {  } from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from  './componentes/Menu';
import ContextoUsuario, { UserProvider } from './componentes/context/ContextoUsuario';



function App() {
  

  return (
    <div className="App">
      <UserProvider>
      <Menu/>  
      </UserProvider>
    </div>
  );
}

export default App;

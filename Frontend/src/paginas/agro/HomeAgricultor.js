import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import VerAgricultor from './VerAgricultor';
import {LOGOUT} from '../../componentes/router/Path';
import listaAgricultor from './listaAgricultor';
import listaInversor from './listainversionista';
import EditarAgro from  "./EditarAgricultor";
import ContextoUsuario from '../../componentes/context/ContextoUsuario';

const HomeAgricultor = () => {
  const {usuario} = useContext(ContextoUsuario);

  return (
    <div> 
      <div>
        <h2>Hola Tiene Acceso </h2>
        <p>{usuario ? ` Hola ${usuario.correo} ` : 'Bienvenido'}</p> 
        <Link to={LOGOUT}>Cerrar sesión</Link>
        
        <listaAgricultor/> 
        <listaInversor/>
         
        

      </div>

      
    </div>  
  )
}

export default HomeAgricultor

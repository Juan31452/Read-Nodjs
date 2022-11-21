import React, { useEffect, useState } from "react";
import  {Form, Button } from 'react-bootstrap';
import axios from "axios";
import app from "./app.json";
import {isNull} from "util";
import Cookies from "universal-cookie";
//import VerAgricultor from "./VerAgricultor";
import { Link } from "react-router-dom";
import { useAuthContext } from "../componentes/context/authContext";
import {miclave} from '../componentes/context/Miclave';
import mialerta from 'sweetalert';

function Login() {
  const {login} = useAuthContext();
  const [tipo_usuario, setTipo_usuario ] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [usuario1, setUsuario1] = useState("");
  
  const {APIHOST}= app;
  const cookies = new Cookies();
  
  const MostrarAlerta = () => {
    mialerta({
      title:"Error",
      text:"Correo o Contraseña invalidos",
      icon: "warning",
      button:"Aceptar"
    })
  }

  function CargarDatos(event){
    event.preventDefault()
    const usuarioActual = {
       
      email: email,
      password: password,

 
    };
  
     axios
     .post(`${APIHOST}/usuarios/login `,usuarioActual)
     .then((res) => { 
      const usuario = res.data;
   
       if(isNull(res.data)){
      //alert("Usuario o Contraseña invalidos");
      MostrarAlerta();
      console.log(usuarioActual);
      console.log(email);
      }else{
       console.log(usuario)
       setTipo_usuario(res.data.tipo_usuario); 
       login();

      }  
     });
    
    
  }
  
  // Aquí setteas la propiedad.
Login.global = {
  correo: email
};

  useEffect(() => {
    if(isNull(tipo_usuario)){
      console.log('no render!')
    }else{
      console.log('render!')
      console.log(tipo_usuario);  
      
    }
    
    
      
  })

  return (
    <div>
      <Form onSubmit={CargarDatos}>
        <div>INICIO SESION.</div>
        <div>
            <label htmlFor="elemail">Email:</label>
            <input type="text" value={email} onChange={ev => setEmail(ev.target.value)} />
            </div>
        <div>
            <label htmlFor="elpassword">Password:</label> 
            <input type="text" value={password} onChange={ev => setPassword(ev.target.value)} />
        </div>
        
        <div>
            <Button type="submit">INGRESAR</Button>
        </div>   
        </Form>
          <Link to="/CrearUsuario">Registrate </Link>
      
      
      
    </div> 
    
  )
}

export default Login;

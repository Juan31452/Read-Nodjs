import axios from 'axios';
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import {isNull} from "util";
import app from "../app.json";
import { useAuthContext } from "../../componentes/context/authContext";

const CrearUsuario = () => {
    const {login} = useAuthContext();

    const [tipo_usuario, setTipo_usuario ] = useState(""); 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {APIHOST}= app;
  
    const GuardarDatos = () => {
        const usuarioActual = {
       
            email: email,
            password: password,
            tipo_usuario: tipo_usuario,
       
          };
        

        axios
        .post(`${APIHOST}/usuarios `,usuarioActual)
        .then((res) => { 
         const usuario = res.data;
      
          if(isNull(res.data)){
         alert("Usuario o Contraseña invalidos");
         //MostrarAlerta();
         console.log(usuarioActual);
         console.log(email);
         }else{
          console.log(usuario)
          setTipo_usuario(res.data.tipo_usuario); 
          login();
   
           //window.location.replace('/VerAgricultor');    
         }  
        });
   
         
    }
  return (
    <div>
    <Form onSubmit={GuardarDatos}>
    <div>
        <label htmlFor="elemail">Email:</label>
        <input type="text" value={email} onChange={ev => setEmail(ev.target.value)} />
        </div>
    <div>
        <label htmlFor="elpassword">Password:</label> 
        <input type="text" value={password} onChange={ev => setPassword(ev.target.value)} />
    </div>
    <div>
    <select id="opciones" value = {tipo_usuario} onChange={ev => setTipo_usuario(ev.target.value)} >
    <option>Seleccione</option>
    <option>Agricultor</option>
    <option>inversionista</option>     
  </select>    
  </div>
    
    <div>
        <Button type="submit">INGRESAR</Button>
    </div>   
    </Form>
         
    </div>
  )
}
 
export default CrearUsuario

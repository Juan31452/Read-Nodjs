import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";

export default class CrearAgro extends Component {
  constructor(props) {
    super(props);

    this.onChangeAgronombres = this.onChangeAgronombres.bind(this);
    this.onChangeAgroapellidos = this.onChangeAgroapellidos.bind(this);
    this.onChangeAgrocorreo = this.onChangeAgrocorreo.bind(this);
    this.onChangeAgrocedula = this.onChangeAgrocedula.bind(this);
    this.onChangeAgrocontraseña = this.onChangeAgrocontraseña.bind(this);
    this.onChangeAgromatriculai = this.onChangeAgromatriculai.bind(this);
    this.onChangeAgroagremiacion = this.onChangeAgroagremiacion.bind(this);
    this.onChangeAgrorut = this.onChangeAgrorut.bind(this);
    
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      nombres: "",
      apellidos: "",
      correo: "",
      cedula: "",
      contraseña: "", 
      matriculai: "",
      agremiacion: "",
      rut: "",
    };
  }
      
  onChangeAgronombres(e) {
    this.setState({ nombres: e.target.value });
  }
  onChangeAgroapellidos(e) {
    this.setState({ apellidos: e.target.value });
  }
  onChangeAgrocorreo(e) {
    this.setState({ correo: e.target.value });
  }
    
  onChangeAgrocontraseña(e) {
    this.setState({ contraseña: e.target.value });
  }
  onChangeAgrocedula(e) {
    this.setState({ cedula: e.target.value });
  }
  onChangeAgromatriculai(e) {
    this.setState({ matriculai: e.target.value });
  }
  onChangeAgroagremiacion(e) {
    this.setState({ agremiacion: e.target.value });
  }
  onChangeAgrorut(e) {
    this.setState({ rut: e.target.value });
  }
  
  onSubmit(e) {
    e.preventDefault();
    const AgricultorObject = {
      nombres: this.state.nombres,
      apellidos: this.state.apellidos,
      correo: this.state.correo,
      cedula: this.state.cedula,
      contraseña: this.state.contraseña,
      agremiacion: this.state.agremiacion,
      matriculai: this.state.matriculai, 
      rut: this.state.rut,
    };
  
    
    axios.post(`http://localhost:3000/usuarios/login`)
    .then(res => {
      const persons = res.data;
      this.setState({ persons });
    })
  }
  render() 
  {
  
    return (
      <div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
      <Form.Group controlId="nombres">
        <Form.Label>Nombres</Form.Label>
        <Form.Control
           type="text"
           value={this.state.nombres}
           onChange={this.onChangeAgronombres}
         />
       </Form.Group>

          <Form.Group controlId="apellidos">
            <Form.Label>Apellidos</Form.Label>
            <Form.Control
              type="text"
              value={this.state.apellidos}
              onChange={this.onChangeAgroapellidos}
            />
          </Form.Group>

          <Form.Group controlId="correo">
            <Form.Label>Correo</Form.Label>
            <Form.Control
              type="text"
              value={this.state.correo}
              onChange={this.onChangeAgrocorreo}
            />

          </Form.Group>
        
          <Form.Group controlId="cedula">
            <Form.Label>Cedula</Form.Label>
            <Form.Control
              type="text"
              value={this.state.cedula}
              onChange={this.onChangeAgrocedula}
            />
          </Form.Group>

          <Form.Group controlId="contraseña">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="text"
              value={this.state.contraseña}
              onChange={this.onChangeAgrocontraseña}
            />
          </Form.Group>

          <Form.Group controlId="agemiacion">
            <Form.Label>Agremiacion</Form.Label>
            <Form.Control
              type="text"
              value={this.state.agremiacion}
              onChange={this.onChangeAgroagremiacion}
            />
            
          </Form.Group>
          <Form.Group controlId="matriculai">
          <Form.Label>Matricula I</Form.Label>
          <Form.Control
            type="text"
            value={this.state.matriculai}
            onChange={this.onChangeAgromatriculai}
          />
          
        </Form.Group>
        <Form.Group controlId="Rut">
        <Form.Label>Rut</Form.Label>
        <Form.Control
          type="text"
          value={this.state.rut}
          onChange={this.onChangeAgrorut}
        />
        
      </Form.Group>

          <Button
            variant="danger"
            size="lg"
            block="block"
            type="submit"
            className="mt-4"
          >
            Crear Agricultor
          </Button>
        </Form>
      </div>
 
      );
   }
}  
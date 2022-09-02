import React,{useState} from 'react';
import { Form,Button } from 'semantic-ui-react';
import {useFormik} from "formik";
import * as Yup from "yup";

export default function Register2() {
  return (
    <div>
        <Form className="formContent formContent-register ">
            <Form.Input label="Nombre" name="username" type="text" placeholder="Nombre" required/>
            <Form.Input label="Apellido" name="apellido" type="text" placeholder="Apellidos" required/>
            <Form.Input label="Dirección" name="direccion" type="text" placeholder="Dirección" required/>
            <Form.Input label="Contraseña" name="password" type="text" placeholder="Contraseña" required/>
            <Form.Input label="E-mail" name="email" type="text" placeholder="E-mail" required/>
            <Form.Input label="Numero de Telefono" name="telefono" type="text" placeholder="Ej. ( 381-155321006 )" required/>
            <Form.Group inline>
              <label>Roles</label>
              <Form.Field
                label='Alumno'
                control='input'
                type='radio'
                name='rol'
                value="alumno"
              />
              <Form.Field
                label='Profesor'
                control='input'
                type='radio'
                name='rol'
                value="subadmin"
              />
              <Form.Field
                label='Administrador'
                control='input'
                type='radio'
                name='rol'
                value="admin"  
              />          
            </Form.Group>
            <div>
              <Button type='submit'  className='Button-login'>
                Registrar 
              </Button>
            </div>
        </Form>
    </div>
  )
}

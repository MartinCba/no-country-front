import React,{useState} from "react";
import { Button,Form } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {toast} from "react-toastify";
import useAuth from "../../../hooks/useAuth";
import { loginApi } from "../../../api/Auth/user";


export const Login = (props) => {

  // funcion que modifica un useState del basicModal para cerra el Modal.
  const { setshowModal } = props;

  // UseState para utilizar el spinner.
  const [loading, setLoading] = useState(false);

  const {login,auth} = useAuth();

  console.log(auth);

  //constante que almacena el hooks de Formik.
  const formik = useFormik(
    { 
      initialValues:initialValues(),
      validationSchema:Yup.object(validationSchema()), 
      onSubmit: async (values) => {
        setLoading(true); // iniciador de spinner de carga.
        const response = await loginApi(values); 
        setLoading(false); // fin de spinner de carga.
        if (response?.token) {
          //funcion que almacena un objeto del usuario en el contexto general.
          login(response.token);
          toast.success("Ingresando...");
          setshowModal(false);
        } else {
          toast.error("Usuario o contraseña incorrrecto");
        }
      }, 
    }
  );

  

  return (
    <>
      <div className="auth">
        <Form className="formContent" onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="email">E-mail</label>
            <Form.Input
              type="text"
              name="email"
              onChange={formik.handleChange}
              error={formik.errors.email}
            />
          </div>
          <div>
            <label htmlFor="password">Contraseña</label>
            <Form.Input
              className="form__input"
              type="password"
              name="password"
              onChange={formik.handleChange}
              error={formik.errors.password}
            />
            
          </div>
          <div>
            <Button type="submit" className="Button-login" onClick={formik.handleSubmit}>
              Entrar  
            </Button>  
          </div>
         
        </Form>
      </div>
    </>
  );
};



//funcion que retorna un objeto con los initialValues para usarse en useFormik.
function initialValues() {
  return {
    email: "",
    password: "",
  };
};

// funcion que retorna un objeto con valores validados con Yup para utilizarse como schema de useFormik.
function validationSchema(){
  return {
    email : Yup.string().required(true),
    password: Yup.string().required(true),
  };
}
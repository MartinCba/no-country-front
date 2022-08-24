import React,{useState} from "react";
import { Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {toast} from "react-toastify";

import { loginApi } from "../../../api/Auth/user";

export const Login = () => {
  // UseState para utilkizar el spinner.
  const [loading, setLoading] = useState(false);

  //constante que almacena el hooks de Formik.
  const formik = useFormik({ 
    initialValues:initialValues(),
    validationSchema:Yup.object(validationSchema()), 
    onSubmit: onSubmit, 
  });


  async function onSubmit (values){
    setLoading(true); // iniciador de spinner de carga.
    const response = await loginApi(values); 
    setLoading(false); // fin de spinner de carga.
    console.log(response);
    if (response?.token) {
      localStorage.setItem("token", response.token);
      toast.success("Ingresando...");
    } else {
      toast.error("Usuario o contraseña incorrrecto");
    }
  };

  //Destructuring funciones de constante que almacena en hooks de Formik. 
  const { handleSubmit, handleChange, values, errors } = formik;

  return (
    <>
      <div className="auth">
        <form onSubmit={handleSubmit}>
          <div>
            <label>E-mail</label>
            <input
              type="text"
              name="email"
              onChange={handleChange}
              error={errors.email}
            />
          </div>
          <div>
            <label>Contraseña</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              error={errors.password}
            />
          </div>
          <div>
            <Button type="submit" loading={loading}>Enviar</Button>
          </div>
        </form>
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
    email: Yup.string().min(4, "La cantidad mínima de caracteres es 4").required(true),
    password: Yup.string().required(true),
  };
}
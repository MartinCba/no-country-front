import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { loginApi } from "../../../api/Auth/user";

export const Login = () => {

  

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = () =>
    Yup.object().shape({
      email: Yup.string()
        .min(4, "La cantidad mínima de caracteres es 4")
        .required(true),
      password: Yup.string().required(true),
    });

  const onSubmit = async (values) => {
    
    const response = await loginApi(values);
    console.log(response);
    if (response?.token) {
      localStorage.setItem("token", response.token);
      console.log("conectado el backen");
    } else {
      console.log("fallo el fetch")
    }
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  const { handleSubmit, handleChange, values } = formik;

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
              value={values.email}
            />
          </div>
          <div>
            <label>Contraseña</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={values.password}
            />
          </div>
          <div>
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </>
  );
};

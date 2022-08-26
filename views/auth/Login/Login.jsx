import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const { BACK_ENDPOINT } = process.env;
export const Login = () => {
  const initialValues = {
    userName: "",
    password: "",
  };

  const required = "* Campo obligatorio";

  const validationSchema = () =>
    Yup.object().shape({
      userName: Yup.string()
        .min(4, "La cantidad mínima de caracteres es 4")
        .required(required),
      password: Yup.string().required(required),
    });

  const onSubmit = () => {
    const { userName, password } = values;

    fetch("https://node-app-gym.herokuapp.com/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        if (data.status_code === 200) {
          localStorage.setItem("token", data?.result?.token);
          localStorage.setItem("userName", data?.result?.user.userName);
          alert("success");
        } else {
          alert("error");
        }
      });
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  const { handleSubmit, handleChange, values, handleBlur, touched, errors } =
    formik;

  return (
    <>
      <div className="auth">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre de usuario</label>
            <input
              type="text"
              name="userName"
              onChange={handleChange}
              value={values.userName}
              onBlur={handleBlur}
              className={errors.userName && touched.userName ? "error" : ""}
            />
            {errors.userName && touched.userName && (
              <div>{errors.userName}</div>
            )}
          </div>
          <div>
            <label>Contraseña</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur}
              className={errors.password && touched.password ? "error" : ""}
            />
            {errors.password && touched.password && (
              <div>{errors.password}</div>
            )}
          </div>
          <div>
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </>
  );
};

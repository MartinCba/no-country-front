import React, {useState, useEffect}from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";

export default function FormActividades() {
  const [data, setData] = useState();


  useEffect(() => {
    fetch("endpoint-url")
      .then((response) => response.json())
      .then((data) => setData(data.result));
  }, []);

  const initialValues = {
    nombre: "",
    dia: "",
    hora: "",
    switch: false,
  };

  const required = "* Campo obligatorio";

  const validationSchema = () =>
    Yup.object().shape({
      nombre: Yup.string().required(required),
      dia: Yup.string().required(required),
      hora: Yup.string().required(required),
    });

  const onSubmit = () => {
    fetch("endpoint-url", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: values.nombre,
        dia: values.dia,
        hora: values.hora,
      }),
    })
      .then((response) => response.json())
      .then((data) =>
        // navigate("/registered/" + data?.result?.user?.teamID, {
        //   replace: true,
        // })
        alert("actividad no encontrada")
      );
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  const { handleSubmit, handleChange, errors, values, setFieldValue } = formik;

  return (
    <div className="FormActividades">
      <form onSubmit={handleSubmit}>
      <div>
          <label>Nombre de la Actividad</label>
          <input
            type="text"
            name="nombre"
            onChange={handleChange}
            value={values.userName}
          />
        </div>
        <div>
          <label>Día del evento</label>
          <input
            type="date"
            name="dia"
            onChange={handleChange}
            value={values.userName}
          />
        </div>
        <div>
          <label>Hora del evento</label>
          <input
            type="time"
            name="hora"
            onChange={handleChange}
            value={values.password}
          />
        </div>
        <div>
          <button type="submit">Actualizar Horario</button>
        </div>
      </form>
    </div>
  );
};
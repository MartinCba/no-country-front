import React, {useState, useEffect}from 'react'
import BasicLayout from "../../components/BasicLayout/BasicLayout";
import FormActividades from "../../components/Activity/FormularioActividades";


export default function Actividades() {
  //const {auth,logout} = useAuth();

  return (
    <BasicLayout>
      <h1>Actividades</h1>
      <FormActividades/>
    </BasicLayout>
  )
}

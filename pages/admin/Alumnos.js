import React from 'react';
import BasicLayout from "../../components/BasicLayout/BasicLayout";
import Buscador from '../../components/Buscador/Buscador';


export default function Alumnos() {
  return (
    <BasicLayout>
      <h2>Buscar Alumnos</h2>
      <Buscador/>
    </BasicLayout>
  )
}


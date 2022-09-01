import React from 'react';
import BasicLayout from "../../components/BasicLayout/BasicLayout";
import Buscador from '../../components/Buscador/Buscador';

export default function Profesores() {
  return (
    <BasicLayout>
      <h2>Buscar Profesores</h2>
      <Buscador/>
    </BasicLayout>
  )
}

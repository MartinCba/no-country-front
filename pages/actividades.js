import React from 'react';
import BasicLayout from "../components/BasicLayout/BasicLayout";
import CuadroActividades from '../components/Activity/CuadroActividades';

export default function actividades() {
  return (
    <BasicLayout>

        <h1>Clases Semanales</h1>
        <CuadroActividades />
        
    </BasicLayout>
  )
}

import React from 'react'
import BasicLayout from "../../components/BasicLayout/BasicLayout";
import useAuth from "../../../../hooks/useAuth";
import Buscador from '../../components/Buscador/Buscador';

export default function Actividades() {
  const {auth,logout} = useAuth();

  /* const response = await getMeApi(logout, auth?.idUser); */

  return (
    <BasicLayout>
      <Buscador/>
    </BasicLayout>
  )
}

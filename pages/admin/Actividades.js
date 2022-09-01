import React from 'react'
import BasicLayout from "../../components/BasicLayout/BasicLayout";
import useAuth from "../../../../hooks/useAuth";

export default function Actividades() {
  const {auth,logout} = useAuth();

  /* const response = await getMeApi(logout, auth?.idUser); */

  return (
    <BasicLayout>
      <h1>Actividades</h1>
    </BasicLayout>
  )
}

import React, { useState,useEffect } from "react";
import BasicLayout from "../../components/BasicLayout/BasicLayout";
import Buscador from '../../components/Buscador/Buscador';
import { Button,Icon } from "semantic-ui-react";
import BasicModal from "../../components/Modal/BasicModal/BasicModal";
import Register2 from "../../views/auth/Register/Register2";

export default function Alumnos() {
  // useState para mostrar el BasicModal.
  const [showModal, setshowModal] = useState(false);
  
  // funciones para cambiar el estado del BasicModal.
  const onShowModal = () => setshowModal(true);
  const onCloseModal = () => setshowModal(false);

  return (
    <BasicLayout>
      <Button className="BotonRegister" onClick={onShowModal}>
        <Icon name="plus" />
        Agregar Alumno
      </Button>  
      <h2 className="title-alum">Buscar Alumnos</h2>
      <Buscador rolBuscar={"alumno"}/>
      
      
      <BasicModal
        show={showModal}
        setShow={setshowModal}
        title="Agregar Alumnos"
        size="small"
        onCloseModal={onCloseModal}
      >
        <Register2 onCloseModal={onCloseModal} />
      </BasicModal>
    </BasicLayout>
  )
}


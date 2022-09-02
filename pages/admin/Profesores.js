import React, { useState,useEffect } from "react";
import BasicLayout from "../../components/BasicLayout/BasicLayout";
import Buscador from '../../components/Buscador/Buscador';
import BasicModal from "../../components/Modal/BasicModal/BasicModal";
import { Button,Icon } from "semantic-ui-react";

export default function Profesores() {
  // useState para mostrar el BasicModal.
  const [showModal, setshowModal] = useState(false);
  
  // funciones para cambiar el estado del BasicModal.
  const onShowModal = () => setshowModal(true);
  const onCloseModal = () => setshowModal(false);

  return (
    <BasicLayout>
      <h2>Buscar Profesores</h2>
      <Buscador/>
      <Button onClick={onShowModal}>
        <Icon name="plus" />
        Agregar Profesor
      </Button>  
      <BasicModal
        show={showModal}
        setShow={setshowModal}
        title="Crear Alumno"
        size="small"
        onCloseModal={onCloseModal}
      >
      </BasicModal>
    </BasicLayout>
  )
}

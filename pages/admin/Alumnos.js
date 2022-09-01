import React, { useState,useEffect } from "react";
import BasicLayout from "../../components/BasicLayout/BasicLayout";
import { Button,Icon } from "semantic-ui-react";
import BasicModal from "../../components/Modal/BasicModal/BasicModal";

export default function Alumnos() {
  // useState para mostrar el BasicModal.
  const [showModal, setshowModal] = useState(false);
  
  // funciones para cambiar el estado del BasicModal.
  const onShowModal = () => setshowModal(true);
  const onCloseModal = () => setshowModal(false);

  return (
    <BasicLayout>
      <br></br>
      <br></br>
      <Button onClick={onShowModal}>
        <Icon name="plus" />
        Agregar Alumno
      </Button>  
      <BasicModal
        show={showModal}
        setShow={setshowModal}
        title="Agregar Alumnos"
        size="small"
        onCloseModal={onCloseModal}
      >
      */ Agregar aca el componente del formulario*/
      </BasicModal>
    </BasicLayout>
  )
}


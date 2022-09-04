import React, { useState,useEffect } from "react";
import UseAuth from "../../hooks/useAuth";
import BasicLayout from "../../components/BasicLayout/BasicLayout";
import Buscador from '../../components/Buscador/Buscador';
import BasicModal from "../../components/Modal/BasicModal/BasicModal";
import { Button,Icon } from "semantic-ui-react";


export default function Actividades() {
  const {auth,logout} = UseAuth();

  // useState para mostrar el BasicModal.
  const [showModal, setshowModal] = useState(false);
  
  // funciones para cambiar el estado del BasicModal.
  const onShowModal = () => setshowModal(true);
  const onCloseModal = () => setshowModal(false);

  return (
    <BasicLayout>

      <h2>Buscar Actividades</h2>
      <Buscador/>

      <Button onClick={onShowModal}>
        <Icon name="plus" />
        Agregar Actividad
      </Button>  
      <BasicModal
        show={showModal}
        setShow={setshowModal}
        title="Agregar Actividad"
        size="small"
        onCloseModal={onCloseModal}
      >
        */ Agregar aca el componente del formulario*/
      </BasicModal>
    </BasicLayout>
  )
}

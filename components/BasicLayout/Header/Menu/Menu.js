import React, { useState } from "react";
import { Container, Grid, GridColumn, Icon } from "semantic-ui-react";
import BasicModal from "../../../Modal/BasicModal/BasicModal";
import {Login} from "../../../../views/auth/Login/Login";
import useAuth from "../../../../hooks/useAuth";

export default function MenuHome() {
  // useState para mostrar el BasicModal.
  const [showModal, setshowModal] = useState(false);

  // Extraemos del context con el hook el objeto que almacena el token.
  const {auth} = useAuth();
  
  // funciones para cambiar el estado del BasicModal.
  const onShowModal = () => setshowModal(true);
  const onCloseModal = () => setshowModal(false);

  return (
    <div className="menu">
      <Container>
        <Grid>
          <GridColumn className="menu__right" width={6}>
          {auth ? (<h3>{auth.nombre}</h3>) : (<h3>Fitness Gym</h3>)}
          </GridColumn>
          <GridColumn className="menu__left" width={10}>
            {auth ? (
              <div>
                <Icon name="user outline" />
                {auth.nombre}
              </div>
            ) : (
              <MenuOptions
              onShowModal={onShowModal}
            />
            )}
            
          </GridColumn>
        </Grid>
      </Container>
      <BasicModal
        show={showModal}
        setShow={setshowModal}
        title="Iniciar sesión"
        size="small"
        onCloseModal={onCloseModal}
      >
      <Login setshowModal={setshowModal} />
      </BasicModal>
    </div>
  );
}

function MenuOptions(props) {
  const { onShowModal } = props;
  return (
    <button onClick={onShowModal}>
      <Icon name="user outline" />
      Mi cuenta
    </button>
  );
}

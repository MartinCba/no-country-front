import React, { useState } from "react";
import { Container, Grid, GridColumn, Icon } from "semantic-ui-react";
import BasicModal from "../../../Modal/BasicModal/BasicModal";
import {Login} from "../../../../views/auth/Login/Login";

export default function MenuHome() {
  const [showModal, setshowModal] = useState(false);

  const onShowModal = () => setshowModal(true);
  const onCloseModal = () => setshowModal(false);
  return (
    <div className="menu">
      <Container>
        <Grid>
          <GridColumn className="menu__right" width={6}>
            <h3>Fitness Gym</h3>
          </GridColumn>
          <GridColumn className="menu__left" width={10}>
            <MenuOptions
              onShowModal={onShowModal}
            />
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
    <div onClick={onShowModal}>
      <Icon name="user outline" />
      Mi cuenta
    </div>
  );
}

import { BASE_PATH } from "../../utils/constants";
import { Input,Table } from 'semantic-ui-react';
import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Buscador() {
  const [usuarios, setUsuarios] = useState([]);
  const [tablaUsuarios, setTablaUsuarios] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const peticionGet = async () => {
    await axios
      .get(`${BASE_PATH}/users`)
      .then((response) => {
        setUsuarios(response.data);
        setTablaUsuarios(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    var resultadosBusqueda = tablaUsuarios.filter((elemento) => {
      if (
        elemento.name
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        elemento.company.name
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setUsuarios(resultadosBusqueda);
  };

  useEffect(() => {
    peticionGet();
  }, []);

  return (
    <div className="search">
      <div className="containerInput">
        <Input className="inputBuscar" iconPosition='left' onChange={handleChange} value={busqueda} icon='users' placeholder='Buscar alumnos...' />
      </div>

      <div className="ContainerTable">
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={3}>Nombre</Table.HeaderCell>
              <Table.HeaderCell width={3}>Apellido</Table.HeaderCell>
              <Table.HeaderCell width={3}>Correo</Table.HeaderCell>
              <Table.HeaderCell width={3}>Telefono</Table.HeaderCell>
              <Table.HeaderCell width={2}>Editar</Table.HeaderCell>
              <Table.HeaderCell width={2}>Borrar</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
          {usuarios &&
              usuarios.map((usuario) => (
            <Table.Row>
              <Table.Cell>usuarios.name</Table.Cell>
              <Table.Cell>Approved</Table.Cell>
              <Table.Cell>Approved</Table.Cell>
              <Table.Cell>Approved</Table.Cell>
              <Table.Cell>Approved</Table.Cell>
              <Table.Cell>Approved</Table.Cell>
            </Table.Row>
            ))}
          </Table.Body>
          
        </Table>
        {/* <table className="tableBuscador">
          <thead className="tableBuscador-header">
            <tr className="tableBuscador-tr">
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Correo</th>
              <th>Teléfono</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {usuarios &&
              usuarios.map((usuario) => (
                <tr key={usuario.id}>
                  <td>{usuario.nombre}</td>
                  <td>{usuario.apellido}</td>
                  <td>{usuario.email}</td>
                  <td>{usuario.telefono}</td>
                </tr>
              ))}
          </tbody>
        </table> */}
      </div>
    </div>
  );
}


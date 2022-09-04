import { Input,Table,Icon } from 'semantic-ui-react';
import { useEffect, useState } from "react";
import {getAllApi} from "../../api/Auth/user";

export default function Buscador() {
  //State de datos de forma dinamica
  const [usuarios, setUsuarios] = useState([]);
  //State de datos de forma statica
  const [tablaUsuarios, setTablaUsuarios] = useState([]);
  //state de lo que escribimos en input.
  const [busqueda, setBusqueda] = useState("");

  const peticionGet = async ()=> {
    const response = await getAllApi();
    return response;
  }
  //Funcion que gusarda en busqueda lo del buscador y ejecuta la funcion para filtrar.
  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };
  
  //funcion de filtrado.
  const filtrar =(busqueda)=>{
    let resultadoBusqueda= tablaUsuarios.filter( (elemento) =>{
      if(elemento.rol==="alumno" ){
        if( elemento.nombre.toString().includes(busqueda)  || elemento.apellido.toString().includes(busqueda) || elemento.email.toString().includes(busqueda) )
        return elemento;
      }
    });
    setUsuarios(resultadoBusqueda);
  }

  useEffect(() => {
    (async ()=>{
      const response = await peticionGet();
      setUsuarios(response);
      setTablaUsuarios(response);
    })()
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
          {busqueda &&
              usuarios.map((usuario) => (
            <Table.Row key={usuario._id} >
              <Table.Cell>{usuario.nombre}</Table.Cell>
              <Table.Cell>{usuario.apellido}</Table.Cell>
              <Table.Cell>{usuario.email}</Table.Cell>
              <Table.Cell>{usuario.telefono}</Table.Cell>
              <Table.Cell><Icon name='edit outline'/></Table.Cell>
              <Table.Cell>
                <Icon size='big' color='red' name='dont' />
                <Icon color='black' name='user' />
              </Table.Cell>
            </Table.Row>
          ))}
          </Table.Body>
          
        </Table>
      </div>
    </div>
  );
}

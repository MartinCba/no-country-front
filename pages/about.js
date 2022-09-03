import { useEffect, useState } from "react";
import BasicLayout from "../components/BasicLayout/BasicLayout";
import UseAuth from '../hooks/UseAuth';
import { getMeApi } from "../api/Auth/user";
import { Loader } from 'semantic-ui-react';

export default function About() {
      // Extraemos del context con el hook el objeto que almacena el token.
  const {auth,logout} = UseAuth();

  // useState que guarda el usuario.
  const [user, setUser] = useState(null);
  

  useEffect(() => {
    (async () => {
      const response = await getMeApi(logout, auth?.idUser);
      setUser(response);
    })()

  }, [auth?.idUser,logout]);

  return (
    <BasicLayout>
        <div  className='CuadroActividades'>
            <h1>Vencimiento de Cuota</h1>
            {user ? 
                (<div className='FechadePago'>{user.Usuario.fechaDePago} </div>): 
                (<Loader active inline/>)
            }

        </div>
        <div  className='CuadroActividades'>
            <h1>Datos Personales</h1>
            {user ? 
                (<>
                    <div className='DatosPersonales'>
                        <div className='DatosPersonales-title'>Nombre:</div>
                        <div className='DatosPersonales-valor'>{user.Usuario.nombre} </div>
                    </div>
                    <div className='DatosPersonales'>
                        <div className='DatosPersonales-title'>Apellido:</div>
                        <div className='DatosPersonales-valor'>{user.Usuario.apellido} </div>
                    </div>
                    <div className='DatosPersonales'>
                        <div className='DatosPersonales-title'>Telefono:</div>
                        <div className='DatosPersonales-valor'>{user.Usuario.telefono} </div>
                    </div>
                    <div className='DatosPersonales'>
                        <div className='DatosPersonales-title'>Dirección:</div>
                        <div className='DatosPersonales-valor'>{user.Usuario.direccion} </div>
                    </div>
                    <div className='DatosPersonales'>
                        <div className='DatosPersonales-title'>Email:</div>
                        <div className='DatosPersonales-valor'>{user.Usuario.email} </div>
                    </div>
                
                    </>    
                ): 
                (<Loader active inline/>)
            }
        </div>
        <div  className='CuadroActividades'>
            <h1>Activida Favorita</h1>
            {user ? 
                (<div className='FechadePago'>{user.Usuario.activity.nombre} </div>): 
                (<Loader active inline/>)
            }

        </div>
        
        
    </BasicLayout>
  )
}

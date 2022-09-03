import React,{useEffect,useState} from 'react';
import { getAllActivity } from '../../api/actividades';
import {Loader } from 'semantic-ui-react';
import { FormControlUnstyledContext } from '@mui/base';


export default function CuadroActividades() {
    const [activity, setActivity] = useState(null);

    useEffect(() => {
        (async () => {
          const response = await getAllActivity();
          const {Activities}=response;
          setActivity(Activities);
        })()
        
    },[]);
    console.log(activity);
  return (
    <div  className='CuadroActividades'>
        <h1>Horarios de Actividades</h1>
        <div className='ContenedorActividades' >
            {activity ? 
            activity.map((actividad)=>{

                return(
                    <div key={actividad.horarios[0]._id} className='ContenedorClase'>
                        <h1 className='titleclase'>{actividad.nombre}</h1>
                        <div className='ContenedorHora'>
                            <div>
                                {actividad.horarios[0].dia}
                            </div>
                            <div>
                                {actividad.horarios[0].hora}
                            </div>
                        </div>
                    </div>
                );
            }) :
            <Loader active />
                
            }
        </div>
        
    </div>
  )
}


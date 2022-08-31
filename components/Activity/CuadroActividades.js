import React,{useEffect,useState} from 'react';
import { getAllActivity } from '../../api/actividades';


export default function CuadroActividades() {
    const [activity, setActivity] = useState(null);
    const [loadin, setLoadin] = useState(false);

    useEffect(() => {
        (async () => {
          setLoadin(false);
          const response = await getAllActivity();
          const {Activities}=response;
          setLoadin(true);
          setActivity(Activities);
        })()
        
    },[]);
    console.log(activity)

  return (
    <div className='CuadroActividades'>
        <h1>Lunes</h1>
        <div className='classDay'>
            {activity ? 
            activity.map((actividad)=>{
                return(
                    <div>
                        <h1>Cargado</h1>
                    </div>
                );
            }) :
            <p>cARGANDO ...</p>
            }
        </div>
        <h1>Martes</h1>
        <h1>Miercoles</h1>
        <h1>Jueves</h1>
        <h1>Viernes</h1>
        <h1>Savado</h1>
    </div>
  )
}

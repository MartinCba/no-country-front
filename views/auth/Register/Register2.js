import React,{useState,useEffect} from 'react';
import { Form,Button,Loader } from 'semantic-ui-react';
import {toast} from "react-toastify";
import {useFormik} from "formik";
import * as Yup from "yup";
import { registerApi } from '../../../api/Auth/user';
import { getAllActivity } from "../../../api/actividades";
import { getMeApi } from '../../../api/Auth/user';
import UseAuth from '../../../hooks/useAuth';

export default function Register2(props) {
  const [loading, setLoading] = useState(false);
  const [reload,setReload]=useState(false);
  const [activity, setActivity] = useState(null);

  // useState que guarda el usuario.
  const [user, setUser] = useState(null);

  const {auth,logout} = UseAuth();

  useEffect(() => {
    (async () => {
      const response = await getMeApi(logout, auth?.idUser);
      setUser(response);
    })()

  }, [auth?.idUser]);




  // funcion que modifica un useState del basicModal para cerra el Modal.
  const { onCloseModal} = props;

  useEffect(() => {
    (async () => {
      const response = await getAllActivity();
      const {Activities}=response;
      setActivity(Activities);
      setReload(true);
    })()
  },[reload]);

  const formik = useFormik({
    initialValues:{apellido: "",username: "",nombre: "",email: "",password: "",direccion: "",telefono: "",rol: "",activity:""},
    validationSchema:Yup.object(
      {
        email:Yup.string().email("Asegúrese de que el correo sea válido").required(true),
        password: Yup.string().required(true),
        apellido: Yup.string().required(true),
        username: Yup.string().required(true),
        nombre: Yup.string().required(true),
        activity: Yup.string().required(true),
        direccion: Yup.string().required(true),
        telefono: Yup.number().required(true),
        rol: Yup.string().required("Debe seleccionar el tipo usuario"),
      }
    ),
    onSubmit: async (formData)=>{ 
      console.log(formData);
      setLoading(true);
      const response = await registerApi(formData);
      if(response?.error===null){
        toast.success("usuario creado corectamente");
        onCloseModal();
      }else{
        toast.error("El usuario ya se encuentra registrado");
      }
      setLoading(false);
    }
  })

  return (
    <div className='auth'>
        <Form className="formContent" onSubmit={formik.handleSubmit}>
            <Form.Input label="Nombre" name="nombre" type="text" placeholder="Nombre" required onChange={formik.handleChange} error={formik.errors.nombre }/>
            <Form.Input label="Apellido" name="apellido" type="text" placeholder="Apellidos" required onChange={formik.handleChange} error={formik.errors.apellido}/>
            <Form.Input label="Nombre de usuario" name="username" type="text" placeholder="Nombre de usuario" required onChange={formik.handleChange} error={formik.errors.username }/>
            <Form.Input label="E-mail" name="email" type="text" placeholder="E-mail" required onChange={formik.handleChange} error={formik.errors.email}/>
            <Form.Input label="Contraseña" name="password" type="password" placeholder="Contraseña" required onChange={formik.handleChange} error={formik.errors.password}/>
            {activity!==null ?
                    <Form.Field name='activity' label='Actividad preferida' control='select'  required onChange={formik.handleChange} error={formik.errors.password}>
                      {activity.map((actividad)=>{
                        return(
                          <option value={actividad.nombre}>{actividad.nombre}</option>
                        ) 
                      })}
                    </Form.Field>

            :
              <Loader active />
            }
            <Form.Input label="Dirección" name="direccion" type="text" placeholder="Dirección" required onChange={formik.handleChange} error={formik.errors.direccion}/>
            <Form.Input label="Numero de Telefono" name="telefono" type="number" placeholder="Ej. ( 381-155321006 )" required 
            onChange={formik.handleChange} error={formik.errors.telefono}/>
            <Form.Group inline onChange={formik.handleChange} error={formik.errors.rol}>
              <label>Roles</label>
              
              { 
                (user?.Usuario.rol ==="admin" ) 
                ? (
                    <>
                    <Form.Field
                      label='Administrador'
                      control='input'
                      type='radio'
                      name='rol'
                      value="admin"  
                    />  
                    <Form.Field
                      label='Alumno'
                      control='input'
                      type='radio'
                      name='rol'
                      value="alumno"
                    />
                    <Form.Field
                      label='Profesor'
                      control='input'
                      type='radio'
                      name='rol'
                      value="subadmin"
                    />
                    </>
                  ) 
                : (
                    <>
                    <Form.Field
                      label='Alumno'
                      control='input'
                      type='radio'
                      name='rol'
                      value="alumno"
                    />
                    <Form.Field
                      label='Profesor'
                      control='input'
                      type='radio'
                      name='rol'
                      value="subadmin"
                    />
                    </>
                  )
              
              }
                      
            </Form.Group>
            <div>
              <Button loading={loading} type="submit" className="Button-login" onClick={formik.handleSubmit}>
                Registrar
              </Button>
            </div>
        </Form>
    </div>
  )
}

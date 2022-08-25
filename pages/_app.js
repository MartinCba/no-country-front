import React,{useMemo,useEffect,useState} from 'react';

import "../scss/global.scss";
import 'semantic-ui-css/semantic.min.css';

// packete para decodificar el jwt.
import jwtDecode from 'jwt-decode';

//Importamos el objeto que con la funcion CreateContext genera un objeto el contexto general.
import AuthContext from "../context/AuthContext";

//importamos la funcion que almacena token en localStorage.
import { setToken,getToken } from '../api/token';


// packete para mostrar mensajes en consola.
import {ToastContainer} from'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function MyApp({ Component, pageProps }) {

  const [auth,setAuth]=useState(undefined);

  useEffect(() => {
    
    const token= getToken();
    if(token){
      setAuth({
        token,
        idUser: jwtDecode(token).id,
        nombre: jwtDecode(token).nombre,
      });
    }else{
      setAuth(null);
    }
  
  },[]);

  const login=(token)=>{
    //setea el token en el localstorage.
    setToken(token);

    setAuth({
      token,
      idUser: jwtDecode(token).id,
      nombre: jwtDecode(token).nombre,
    });
  }


  const authData= useMemo(
    () => ({
      auth,
      login,
      logout: ()=>null,
      setRelaodUser: ()=>null
    }),[auth]
  );

  if(auth === undefined) return null;

  return (
    <AuthContext.Provider value={authData}>
      <Component {...pageProps} />

      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
    </AuthContext.Provider>
  );
}

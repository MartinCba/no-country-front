import React,{useState} from 'react';
import {Login} from "../../views/auth/Login/Login";
import {Register} from "../../views/auth/Register/Register";
export default function Auth(props) {
    const {onCloseModal,setTitleModal} = props;
    const [ShowLogin, setShowLogin] = useState(true);

    const ShowLoginForm = ()=> {
        setTitleModal("Inicia Sesión");
        setShowLogin(true)
    };
    const showRegisterForm = ()=>{
        setTitleModal("Formulario de Registro");
        setShowLogin(false)
    };

  return (
    ShowLogin ? <Login showRegisterForm={showRegisterForm}/> : <Register ShowLoginForm={ShowLoginForm} />
  )
}

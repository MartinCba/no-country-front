import React,{useState} from 'react';
import {Login} from "../../views/auth/Login/Login";
export default function Auth(props) {
    const {onCloseModal} = props;
    const [ShowLogin, setShowLogin] = useState(false);

  return (
    ShowLogin ? <Login/> : <h1>Esty en el registro</h1>
  )
}

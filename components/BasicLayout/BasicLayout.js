import React from 'react';
import Container from '@mui/material/Container';
import Header from './Header/Header'
import {Footer} from "../infoComponents/Footer/Footer";

export default function BasicLayout(props) {
  const {children}=props;
  return (
    <div className='body'>
      <Header className='header'/>
      <Container className='contenidoBasicLayout' maxWidth='lg'>
        {children}
      </Container>   
      <Footer />
    </div>
  )
}

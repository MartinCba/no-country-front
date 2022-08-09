import React from 'react';
import Container from '@mui/material/Container';
import Header from './Header/Header';

export default function BasicLayout(props) {
  const {children}=props;
  return (
    <>
      <Header />
      <Container className='basic-layout' maxWidth='lg'>
        {children}
      </Container>   
    </>
      
  )
}

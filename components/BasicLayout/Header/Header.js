import { Container } from '@mui/material';
import React from 'react';
import TopBar from "./TopBar/TopBar";

export default function Header() {
  return (
    <div className='header'>
        <TopBar/>
        <Container maxWidth='lg' >
            <h1>desde el header</h1>
        </Container>

    </div>
  )
}

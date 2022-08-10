import React from 'react';
import { Container } from '@mui/material';
import Link from 'next/link';



export default function TopBar() {
  return (
    <Container maxWidth='lg' className='topbar' >
        <img src='/img/LogoPagina.svg'/>
        <div>
            <Link href='/sinprejuicios'  >
                <a className='topbar-hashtag'>#SINPREJUICIOS</a>   
            </Link>

        </div>
        
        
    </Container>
  )
}


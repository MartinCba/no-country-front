import React from 'react';
import { Container,Button } from '@mui/material';
import Link from 'next/link';




export default function TopBar() {
  return (
    <Container maxWidth="lg" className="topbar">
      <Link href="/">
        <a>
          <img src="/img/LogoPagina.svg" />
        </a>
      </Link>

      <div className="topbar__menu">
        <Link href="/sinprejuicios">
          <a className="topbar-hashtag">#SINPREJUICIOS</a>
        </Link>
        <ol className="topbar__menu-options">
          <li>
            <Link href="/sinprejuicios">
              <a>Inicio</a>
            </Link>
          </li>
          <li>
            <Link href="/sinprejuicios">
              <a>Ubicacion</a>
            </Link>
          </li>
          <li>
            <Link href="/sinprejuicios">
              <a>Contacto</a>
            </Link>
          </li>
        </ol>
      </div>
    </Container>
  );
}


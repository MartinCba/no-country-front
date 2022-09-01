import React from 'react';
import Link from 'next/link';

export default function MenuAlumn() {
  return (
    <div className='MenuActividades'>
      <Link href="/actividades" >
        <a className='MenuUser'>Clases</a>
      </Link>
      <Link href="/about" >
        <a className='MenuUser'>Mis Datos</a>
      </Link>
    </div>
  )
}

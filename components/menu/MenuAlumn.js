import React from 'react';
import Link from 'next/link';

export default function MenuAlumn() {
  return (
    <div className='MenuActividades'>
      <Link href="/actividades" >
        <a>Clases</a>
      </Link>
    </div>
  )
}

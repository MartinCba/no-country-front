import React from 'react';
import dynamic from "next/dynamic";
import BasicLayout from '../components/BasicLayout/BasicLayout';
import { Icon } from 'semantic-ui-react';
import Map from '../api/map';

export default function ubicacion() {
  const MapWithNoSSR = dynamic(() => import("../api/maps"), {
    ssr: false
  })
  return (
      <BasicLayout>
        <h1 className="title">Ubicación</h1>
        <main className="contenedor">
          <section className="contenedor__secction">
            <h2>Gimnasio </h2>
            <div className="contenedor__secction--ubicacion">
              <Icon name="thumbtack" />
              <div>
                <h3>Buenos Aires - CABA</h3>
                <p>Av. Córdoba 5932</p>
              </div>
            </div>
          </section>
          <div id="map" className='map'>
                <MapWithNoSSR />
          </div>
          <section className="contenedor__secction">
            <h2>Horarios </h2>
            <div className="horarios">
              <div>
                <h3>Dias Normales</h3>
                <p>
                  <span>Lunes a Viernes:</span> 08:00 hs a 21:00 hs.
                </p>
                <p>
                  <span>Sabado:</span> 08:00 hs a 18:00 hs.
                </p>
              </div>             
            </div>
            <div>
              <h3>Feriados</h3>
              <div>
                <p>
                  <span>Lunes a Viernes:</span> 08:00 hs a 13:00 hs.
                </p>
                <p>
                  <span>Sabado:</span> Cerrado
                </p>
              </div>
            </div>
          </section>
        </main>
      </BasicLayout>
  );
}

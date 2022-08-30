import Image from "next/image";

export const SecundaryInfo = () => {
  return (
    <>
      <h1>Ningún juicio es el mejor</h1>
      <h3>Se fomentan las diferencias. Las peculiaridades son bienvenidas.</h3>
      <div className="card-container">
        <div className="card-content">
          <Image src="/img/img1.png" alt="image" width="200" height="150" />
          <h3>POSITIVIDAD</h3>
          <p>
            Somos cuidadores: solo buscamos alentar,
            <br /> entretener y empoderar.
          </p>
        </div>
        <div className="card-content">
          <Image src="/img/img2.png" alt="image" width="200" height="150" />
          <h3>INCLUSIÓN</h3>
          <p>
            Aquí mantenemos la mente abierta.
            <br /> No hay un solo tipo o manera en nuestra diversa comunidad.
            <br /> ¡Ven tal como eres!
          </p>
        </div>
        <div className="card-content">
          <Image src="/img/img3.png" alt="image" width="200" height="150" />
          <h3>DIVERSIÓN</h3>
          <p>
            Sabemos que el acondicionamiento físico serio
            <br /> es difícil, pero eso no significa que no pueda ser <br />
            una fiesta que lo mantenga al borde de su asiento,
            <br /> que no tenga suficiente, que espere <br />
            con ansias sus entrenamientos.
          </p>
        </div>
      </div>
    </>
  );
};

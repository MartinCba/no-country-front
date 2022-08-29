import Image from "next/image";

export const HomeInfo = () => {
  return (
    <div className="home_info">
      <h3>Home</h3>
      <div className="home_container">
      <Image
        src="/img/gym1.jpg"
        alt="gym"
        width="640"
        height="427"
      />
      <Image
        src="/img/gym2.jpg"
        alt="gym"
        width="640"
        height="427"
      />
      <Image
        src="/img/gym3.jpg"
        alt="gym"
        width="640"
        height="427"
      />
      <Image
        src="/img/gym4.jpg"
        alt="gym"
        width="640"
        height="427"
      />
      <Image
        src="/img/gym5.jpg"
        alt="gym"
        width="640"
        height="427"
      />
      <Image
        src="/img/gym6.jpg"
        alt="gym"
        width="640"
        height="427"
      />
      </div>
    </div>
  );
};

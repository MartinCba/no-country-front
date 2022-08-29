import Head from "next/head";
import BasicLayout from "../components/BasicLayout/BasicLayout";
import { Footer } from "../components/infoComponents/Footer/Footer";
import { HomeInfo } from "../components/infoComponents/HomeInfo/HomeInfo";
import { SecundaryInfo } from "../components/infoComponents/SecundaryInfo/SecundaryInfo";

export default function Home() {
  return (
    <>
      <BasicLayout>
        <Head>
          <title>Mundo Cruch | Nuestro Gym</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta name="description" content="Gym para todas las edades..." />
          <meta name="author" content="Nombre del autor" />
        </Head>
        <HomeInfo/>
        <SecundaryInfo/>
      </BasicLayout>
      <Footer />
    </>
  );
}

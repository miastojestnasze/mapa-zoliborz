import Head from "next/head";
import Image from "next/image";

const PAGE_TITLE = "┼╗oliborska Mapa Fajnych Rzeczy";

export default function Home() {
  return (
    <div>
      <Head>
        <title>{PAGE_TITLE}</title>
        <link rel="icon" href="/mjn-logo.png" />
      </Head>
      <header className="flex space-between align-center">
        <img
          src="./mjn-logo.png"
          alt="Logo Miasto Jest Nasze"
          width={58}
          height={48}
        />
        <h1>{PAGE_TITLE}</h1>
        <span> </span>
      </header>
      <section className="map-container">
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1JKR7Iz-oSMyk5Amxh2YpHeDZA_LS0eQY&ll=52.268820, 20.986085&z=14"
          width="100%"
          height="100%"
        ></iframe>
      </section>
    </div>
  );
}

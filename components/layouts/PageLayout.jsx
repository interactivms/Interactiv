import Head from "next/head";
import Navbar from "../components/Navbar";

function PageLayout({ children }) {
  return (
    <>
      <Head>
        <title>Interactiv Media</title>
        <meta
          name="description"
          content="Agencia de marketing digital y producción visual."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        />
      </Head>
      <Navbar />
      {children}
    </>
  );
}

export default PageLayout;

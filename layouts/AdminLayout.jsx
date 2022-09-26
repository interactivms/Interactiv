import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSession, getSession } from "next-auth/react";
import Navbar from "../components/admin/Navbar";
function AdminLayout({ children }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "unauthenticated") {
    router.push("login");
  }
  return (
    <div className="viewh-100 ">
      <Head>
        <title>Interactiv Media</title>
        <meta
          name="description"
          content="Agencia de marketing digital y producción visual."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Raleway:wght@400;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        />
      </Head>
      {session ? (
        <>
          <div className="row mx-0">
          <Navbar user={session.user} />
          </div>

            {children}

        </>
      ) : (
        <div className="vh-100 d-flex justify-content-center align-items-center">
          Loading...
        </div>
      )}
    </div>
  );
}

export default AdminLayout;

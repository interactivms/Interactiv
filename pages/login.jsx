import React, { useEffect } from "react";
import Head from "next/head";
import DarkLogo from "../components/svgs/DarkLogo";
import {signIn, useSession} from 'next-auth/react'
import { useRouter } from "next/router";
export default function login() {

  const {data: session, status} = useSession();
  const router = useRouter();

  if(status !== 'loading' && status === "authenticated"){
    router.push("/admin")
  }
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
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Raleway:wght@400;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        />
      </Head>
      <div className="row mx-0 viewh-100 bg-dark d-flex justify-content-center align-items-center">
        <div className="container loginCard d-flex flex-column justify-content-center align-items-center">
          <DarkLogo className="my-5" />

          <button onClick={() => signIn()} className="loginButton my-5">Ingresar con google</button>
        </div>()
      </div>
    </>
  );
}

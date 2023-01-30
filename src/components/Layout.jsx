import React from "react";
import Head from "next/head";
import AppHeader from "./AppHeader";

export default function Layout({ children, title }) {
  return (
    <div className=" w-full mx-auto">
      <Head>
        <title>{title} - Arch23 IT consulting & services</title>
      </Head>

      <main>
        <AppHeader />
        {children}
      </main>
    </div>
  );
}

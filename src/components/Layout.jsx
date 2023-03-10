import React from "react";
import Head from "next/head";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";

export default function Layout({ children, title }) {
  return (
    <div className=" w-full mx-auto">
      <Head>
        <title>{title} - Arch23 IT consulting & services</title>
      </Head>

      <main>
        <AppHeader />
        <div className=" min-h-screen">{children}</div>
        <AppFooter />
      </main>
    </div>
  );
}

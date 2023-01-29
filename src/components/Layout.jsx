import React from "react";
import Head from "next/head";
import AppHeader from "./AppHeader";

export default function Layout({ children, title }) {
  return (
    <div className="md:max-w-6xl w-full mx-auto  p-4">
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

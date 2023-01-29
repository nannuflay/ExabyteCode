import Head from "next/head";
import { Inter } from "@next/font/google";
import AppHeader from "@/components/AppHeader";
import AppHero from "@/components/AppHero";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout title={"Home"}>
      <AppHero />
    </Layout>
  );
}

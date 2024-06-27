import PageHeader from "~/components/Section/Common/PageHeader";
import Footer from "~/components/Section/Common/Footer/Footer";

import Header from "~/components/Section/Common/Header/Header";
import ProjectsData from "./ProjectsAvailable";
import Head from "next/head";

export default function ServicePage() {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <PageHeader title="Our Projects" />

      <ProjectsData />

      <Footer />
    </>
  );
}

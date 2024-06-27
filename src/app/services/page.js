import PageHeader from "~/components/Section/Common/PageHeader";
import Footer from "~/components/Section/Common/Footer/Footer";

import Header from "~/components/Section/Common/Header/Header";
import ServiceData from "./Service";
import Head from "next/head";

export default function ServicePage() {
  return (
    <>
      <Head>
        <title>Services</title>
        <meta name="description" content="Services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <PageHeader title="Our Services" />
      <ServiceData />
      {/* <ServiceSection /> */}
      <Footer />
    </>
  );
}

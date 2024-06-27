import Footer from "~/components/Section/Common/Footer/Footer";
import PageHeader from "~/components/Section/Common/PageHeader";
import IntegrationSection from "~/components/Section/Integrations/Integration/Integration";
import Header from "~/components/Section/Common/Header/Header";
import Head from "next/head";
export default function Partners() {
  return (
    <>
      <Head>
        <title>Partners</title>
        <meta name="description" content="Partners" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <PageHeader title="Our Partners" />
      <IntegrationSection />
      <Footer />
    </>
  );
}

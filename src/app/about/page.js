import Head from "next/head";
import ContentSection from "~/components/Section/AboutUs/Content/ContentSection";
import FAQSection from "~/components/Section/Common/FAQ/FAQSection";
import Vision from "~/components/Section/AboutUs/Vision/Vision";

import Footer from "~/components/Section/Common/Footer/Footer";
import PageHeader from "~/components/Section/Common/PageHeader";
import Header from "~/components/Section/Common/Header/Header";
import Methodology from "./Faq";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
        
        <meta name="description" content="3G Integrated Systems is an information technology firm dedicated exclusively to delivering end-to-end computing, telecommunication and project management solutions. We deliver complete solutions to all industries that require our services and you can rely on our industry-based expertise to meeting your specific needs and expectations." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <PageHeader title="About Us" />

      {/* <Vision /> */}
      <ContentSection />

      <Methodology />

      <Footer />
    </>
  );
};

export default AboutPage;

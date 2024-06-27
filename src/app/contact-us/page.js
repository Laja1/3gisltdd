
import Footer from "~/components/Section/Common/Footer/Footer";
import PageHeader from "~/components/Section/Common/PageHeader";

import ContactSection from "~/components/Section/ContactUs/Contact/ContactSection";
import Header from "~/components/Section/Common/Header/Header";
import Head from "next/head";

const ContactUsPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Contact" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <PageHeader title="Contact Us" />
      <ContactSection />
     
      <Footer />
    </>
  );
};

export default ContactUsPage;

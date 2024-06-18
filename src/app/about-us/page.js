
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
      <Header />
      <PageHeader title="About Us" />
    
      <Vision />
      <ContentSection />
      
      <Methodology />

      <Footer />
    </>
  );
};

export default AboutPage;

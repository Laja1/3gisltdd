import AboutSection from "~/components/Section/AboutUs/About/AboutSection";
import ContentSection from "~/components/Section/AboutUs/Content/ContentSection";
import FAQSection from "~/components/Section/Common/FAQ/FAQSection";
import Vision from "~/components/Section/AboutUs/Vision/Vision";
import TeamSection from "~/components/Section/AboutUs/Team/TeamSection";
import Footer from "~/components/Section/Common/Footer/Footer";
import PageHeader from "~/components/Section/Common/PageHeader";
import Header from "~/components/Section/Common/Header/Header";
import Methodology from "./Faq";

const AboutPage = () => {
  return (
    <>
      <Header />
      <PageHeader title="About Us" />
      {/* <AboutSection /> */}
      <Vision />
      <ContentSection />
      {/* <TeamSection /> */}
      <Methodology />

      <Footer />
    </>
  );
};

export default AboutPage;

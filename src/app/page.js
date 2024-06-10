import ContentSectionTwo from "~/components/Section/Home-3/Content-2/ContentTwo";
import ContentSection from "~/components/Section/Home-3/Content/Content";
import HeroSection from "~/components/Section/Home-3/Hero/Hero";
import TestimonialSection from "~/components/Section/Common/Integration-2/IntegrationTwo";
import StateSection from "~/components/Section/Home-3/State/State";
import ServiceSection from "~/components/Section/Home-3/Service/Service";
import FAQSection from "~/components/Section/Common/FAQ/FAQSection";
import HomeHeader from "~/components/Section/Common/Header/HomeHeader";
import FooterSectionThree from "../components/Section/Common/Footer-3/FooterThree";
import ContentSectionThree from "~/components/Section/Home-3/Content-3/ContentTwo";
import Projects from "~/components/Section/Common/Pricing";

export default function HomeThreePage() {
  return (
    <>
      <HomeHeader roundedBtn="true" />
      <HeroSection />
      <ServiceSection />
      <ContentSection />
      <ContentSectionTwo />
      <ContentSectionThree />

      {/* <StateSection /> */}
      <Projects />

      <TestimonialSection />
      {/* <FAQSection /> */}
      <FooterSectionThree />
    </>
  );
}

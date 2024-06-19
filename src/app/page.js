
import ContentSection from "~/components/Section/Home-3/Content/Content";
import HeroSection from "~/components/Section/Home-3/Hero/Hero";
import TestimonialSection from "~/components/Section/Common/Integration-2/IntegrationTwo";
import StateSection from "~/components/Section/Home-3/State/State";
import ServiceSection from "~/components/Section/Home-3/Service/Service";
import FAQSection from "~/components/Section/Common/FAQ/FAQSection";
import HomeHeader from "~/components/Section/Common/Header/HomeHeader";
import Footer from "../components/Section/Common/Footer/Footer";
import ContentSectionThree from "~/components/Section/Home-3/Content-3/ContentTwo";
import Projects from "~/components/Section/Common/Pricing";
import "scrolling-features-react/dist/style.css";
import Service from "~/components/Section/Home-3/Ourservice/page";
import HomeProject from "~/components/Section/Common/OurProjects/HomeProject";
import { Header } from "~/components/Section/Common/Header";

export default function HomeThreePage() {
  return (
    <>
      {/* <HomeHeader roundedBtn="true" /> */}
      <Header />
      <HeroSection />
 <Service />    
     <HomeProject />
      <ServiceSection />
      <Footer />
    </>
  );
}

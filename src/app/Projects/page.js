
import Footer from "~/components/Section/Common/Footer/Footer";
import PageHeader from "~/components/Section/Common/PageHeader";
// import Projects from "~/components/Section/Common/Pricing";
import { Header } from "~/components/Section/Common/Header";
import Projects from "~/components/Section/Project/Project";

export default function HomeThreePage() {
  return (
    <>
      <Header roundedBtn="true" />
      <PageHeader title="Our Projects" />
      {/* <StateSection /> */}
      {/* <Projects /> */}
<Projects />
      {/* <TestimonialSection /> */}
      {/* <FAQSection /> */}
      <Footer />
    </>
  );
}

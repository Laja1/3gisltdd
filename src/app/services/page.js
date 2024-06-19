import PageHeader from "~/components/Section/Common/PageHeader";
import Footer from "~/components/Section/Common/Footer/Footer";
import ServiceSection from "~/components/Section/Service/Service/Service";
import PricingSection from "~/components/Section/Common/Pricing/Pricing";
import Header from "~/components/Section/Common/Header/Header";
import ServiceData from "./Service";


export default function ServicePage() {
  return (
    <>
      <Header />
      <PageHeader title="Our Services" />
<ServiceData />
      {/* <ServiceSection /> */}
      <Footer />
    </>
  );
}
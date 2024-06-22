
import ContentSection from "~/components/Section/Home-3/Content/Content";
import HeroSection from "~/components/Section/Home-3/Hero/Hero";
import Head from 'next/head'
import ServiceSection from "~/components/Section/Home-3/Service/Service";

import Footer from "../components/Section/Common/Footer/Footer";

import "scrolling-features-react/dist/style.css";
import Service from "~/components/Section/Home-3/Ourservice/page";
import HomeProject from "~/components/Section/Common/OurProjects/HomeProject";
import { Header } from "~/components/Section/Common/Header";

export default function HomeThreePage() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="Our Services, Our Project"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HeroSection />
      <Service />
      <HomeProject />
      <ServiceSection />
      <Footer />
    </>
  );
}

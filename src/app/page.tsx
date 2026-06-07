import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import AboutSectionThree from "@/components/About/AboutSectionThree";
import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dynamic Data",
  description: "Dynamic Data",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      {/* <Video />
      <Brands />*/}
      <AboutSectionOne />
      <AboutSectionTwo />
      <AboutSectionThree />
      {/* <Testimonials />*/}
      {/*<Pricing />*/}
      <Blog />
      <Contact />
    </>
  );
}

import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Ayudamos a empresas a escalar con tecnología",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Ingeniería de precisión para un mundo impulsado por datos."
        description="Somos un equipo de especialistas apasionados por la arquitectura limpia y el alto rendimiento. En Dynamic Data, combinamos años de experiencia en desarrollo de backend y sistemas distribuidos para construir soluciones que no solo funcionan hoy, sino que escalan para el mañana."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;

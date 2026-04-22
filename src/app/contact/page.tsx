import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Conectemos con tu visión técnica."
        description="¿Listo para escalar tu infraestructura o resolver un cuello de botella crítico? Estamos aquí para convertir tus desafíos de datos en ventajas competitivas. Déjanos un mensaje y un arquitecto senior se pondrá en contacto contigo."
      />

      <Contact />
    </>
  );
};

export default ContactPage;

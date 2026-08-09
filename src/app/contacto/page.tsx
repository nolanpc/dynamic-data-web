import { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import ContactFormSection from "@/components/sections/contact/ContactFormSection";
import ContactInfoSection from "@/components/sections/contact/ContactInfoSection";

export const metadata: Metadata = {
  title: "Contacto | Dynamic Data",
  description: "Cuéntanos en qué podemos ayudarte.",
};

export default function ContactoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contacto"
        subheading="HABLEMOS"
        title="Cuéntanos en qué podemos ayudarte"
        description="Respondemos en menos de 24 horas."
      />
      <section className="container grid grid-cols-1 gap-10 py-16 md:grid-cols-2">
        <ContactFormSection />
        <ContactInfoSection />
      </section>
    </>
  );
}

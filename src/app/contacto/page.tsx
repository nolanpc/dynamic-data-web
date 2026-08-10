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
        description="Respondemos en menos de 24 horas. Sin formularios eternos, sin compromiso — solo una primera conversación para entender tu proyecto."
        px="lg:px-40"
      />
      <section className="py-0">
        <div className="w-full px-6 sm:px-60 lg:px-45">
          <div className="space-y-8 grid grid-cols-1 gap-2 py-16 md:grid-cols-2">
            <ContactInfoSection />
            <ContactFormSection />
          </div>
        </div>
      </section>
    </>
  );
}

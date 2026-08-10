import DecorativeShapes from "@/components/shared/DecorativeShapes";
import Card from "@/components/ui/Card";
import Link from "next/link";

const info = [
  { icon: "images/icons/email.png", label: "Correo", value: "contact@dynamicdata.tech" },
  { icon: "images/icons/phone_2.png", label: "Teléfono", value: "+58 412 996 3878" },
  { icon: "images/icons/location.png", label: "Ubicación", value: "Trabajamos de forma remota, con clientes en distintas ciudades" },
];

const networking = [
  {
    network: "x",
    icon: "images/icons/x.png",
    link: "https://www.linkedin.com/company/dynamic-data-tech/",
  },
  {
    network: "Instagram",
    icon: "images/icons/instagram.png",
    link: "https://www.linkedin.com/company/dynamic-data-tech/",
  },
  {
    network: "Linkedin",
    icon: "images/icons/linkedin.png",
    link: "https://www.linkedin.com/company/dynamic-data-tech/",
  },    
];

export default function ContactInfoSection() {
  return (
    <div className="flex relative overflow-hidden rounded-xl bg-navy p-8 items-center">
      <DecorativeShapes />
      <div className="!z-40">
        <h3 className="mb-6 text-lg font-semibold text-white">
          Datos de contacto
        </h3>
        <h4 className="mb-6 text-sm text-white/65">
          Elige el canal que prefieras — todos llegan directo a nosotros, no a un buzón general.
        </h4>
        {info.map((item) => (
          <Card key={item.label} className="grid grid-cols-[10%_1fr] !bg-transparent !border-0 !shadow-none gap-5 items-center justify-center !ps-0 !pe-0 !pt-3 !pb-3">
            <div className={`flex p-2 items-center justify-center rounded-xl bg-white/10 w-10 h-10`}>
              <img src={item.icon} alt={item.label} className="w-5" />
            </div>
            <div>
              <h3 className="text-xs text-white/65">
                {item.label}
              </h3>
              <h4 className="text-sm font-bold text-white">
                {item.value}
              </h4>
            </div>
          </Card>
        ))}
        <div className="flex flex-row pt-3 gap-5">
          {networking.map((item) => (
            <div key={item.network} className="!bg-transparent !border-0 !shadow-none items-center justify-center">
              <Link href={item.link} target="_blank" className={`flex p-2 items-center justify-center rounded-xl bg-white/10 w-10 h-10`}>
                <img src={item.icon} alt={item.network} className="w-5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

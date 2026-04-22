import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Arquitectura Data-Mesh vs. Data-Lake: ¿Cuál es el camino para tu empresa?",
    paragraph:
      "Un desglose técnico para ayudarte a decidir el mejor enfoque para gestionar y escalar tus flujos de datos complejos en 2024.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Optimizando la latencia en Java Spring Boot: Lecciones de un proyecto de microservicios a gran escala.",
    paragraph:
      "Cómo nuestro equipo de ingeniería redujo el tiempo de respuesta en un 60% utilizando técnicas de concurrencia y caché de datos.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Prácticas DevSecOps para asegurar la integridad de tus datos en la nube.",
    paragraph:
      "Un enfoque pragmático para integrar la seguridad en tus flujos de CI/CD sin comprometer la velocidad de entrega.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export default blogData;

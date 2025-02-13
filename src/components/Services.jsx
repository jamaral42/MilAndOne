import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Coffee Break",
    shortDesc: "Deitar cedo e cedo erguer, dá saúde e faz crescer.",
    longDesc: "Um café bem feito e uma boa companhia é o início de um dia incrível.",
    image: "/coffee_break.jpg",
  },
  {
    title: "Cocktail",
    shortDesc: "Barriga vazia, não traz alegria.",
    longDesc: "Cocktails, mocktails e seleções de bebidas especialmente preparados para elevar o seu evento.",
    image: "/cocktail.png",
  },
  {
    title: "House Party",
    shortDesc: "Mi casa es tu casa.",
    longDesc: "Desde comidas gourmet até refeições completas, trazemos a festa para a sua casa com um menu personalizado.",
    image: "/house_party.png",
  },
  {
    title: "Almoços/Jantares",
    shortDesc: "Mesa posta para quem gosta.",
    longDesc: "Almoços e jantares deliciosamente preparados para qualquer ocasião, garantindo alto padrão de sabor e apresentação.",
    image: "/almoços_jantares.jpg",
  },
];


export default function Services() {

  return (
    <div className= "flex flex-col items-center py-20">
      <h2 className="text-4xl font-bold mb-16">Os Nossos Serviços</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            service={service}
          />
        ))}

      </div>
    </div>
  );
}

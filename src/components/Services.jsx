import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Coffee Break",
    shortDesc: "Deitar cedo e cedo erguer, dá saúde e faz crescer.",
    longDesc:
      "Enjoy a selection of premium coffee blends, fresh pastries, and snacks tailored for corporate events and casual meetups.",
    image: "/coffee_break.jpg",
  },
  {
    title: "Cocktail",
    shortDesc: "Barriga vazia, não traz alegria.",
    longDesc:
      "Expertly crafted cocktails, mocktails, and curated drink selections to elevate your gatherings.",
    image: "/cocktail.png",
  },
  {
    title: "House Party",
    shortDesc: "Mi casa es tu casa.",
    longDesc:
      "From gourmet finger foods to full-course meals, we bring the party to your home with a customized menu.",
    image: "/house_party.png",
  },
  {
    title: "Almoços/Jantares",
    shortDesc: "Mesa posta para quem gosta.",
    longDesc:
      "Deliciously prepared lunches and dinners for any occasion, ensuring high-quality taste and presentation.",
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

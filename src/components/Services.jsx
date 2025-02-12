import { delay, motion } from "framer-motion";

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
    <div className= " flex flex-col items-center py-20 md:py-40">
      <h2 className="max-padd-container text-4xl font-bold mb-16">Os Nossos Serviços</h2>

      <div className="max-padd-container grid md:grid-cols-2 gap-8">
        {services.map((service) => {

          return (
            <motion.div
              key={service.title}
              layout = "position"
              className= "cursor-pointer border-2 border-secondary rounded-xl p-8  shadow-md transition-all"
              initial="initial"
              whileInView="animate"
            >
              {/* Main Service Info */}
              <motion.div 
                layout="position" 
                className="flex items-center gap-6"

              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="size-24 md:size-45 border-2 border-secondary rounded-xl object-cover"
                />
                <div className="">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-gray-600">{service.shortDesc}</p>
                </div>
              </motion.div>

            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

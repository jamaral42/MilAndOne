import maria from "/contacts/maria.png";
import tobias from "/contacts/tobias.png";

import ContactCard from "../components/ContactCard";
import GoogleForm from "../components/GoogleForm";
import GoogleMap from "../components/GoogleMap";

export default function Contacts() {
  const cards = [
    { name: "Maria", surname: "Ramalho", img: maria, phone: "(+351) 915 778 709" },
    { name: "Tobias", surname: "de Freitas", img: tobias, phone: "(+351) 913 240 618" },
  ];

  return (
    <div className="max-padd-container flex-col py-10 h-[703px] md:h-[603px]">

      <h1 className="flexCenter text-center text-4xl font-bold py-8">Contacte-nos!</h1>

      {/* Desktop */}
      <div className="hidden md:grid grid-cols-3 gap-8 justify-center ">
        {<ContactCard {...cards[0]}/>}

        <div className="flexCenter flex-col text-center">
          <p className="w-full pt-4">Importa-nos  o evento que está a planear e estamos aqui para torná-lo inesquecível.</p>
          <p className="w-full pt-2">Deixe-nos criar memórias excecionais juntos.</p>
          <p className="w-full pt-24 font-bold">Envie-nos um e-mail: <a href="mailto:miland1food@gmail.com" className="ml-2 font-medium hover:underline">miland1food@gmail.com</a></p>
        </div>

        {<ContactCard {...cards[1]} />}
      </div>

      {/* Mobile */}
      <div className="md:hidden grid grid-cols-2 gap-8 justify-center ">

        <div className="text-center col-span-2">
          <p className="">Importa-nos  o evento que está a planear e estamos aqui para torná-lo inesquecível.</p>
          <p className="">Deixe-nos criar memórias excecionais juntos.</p>
          <p className="pt-8 font-bold">Envie-nos um e-mail: <a href="mailto:miland1food@gmail.com" className="ml-2 font-medium hover:underline">miland1food@gmail.com</a></p>
        </div>

        {<ContactCard {...cards[0]}/>}
        {<ContactCard {...cards[1]} />}
      </div>

      {/* Google form and map 
      <div className="flexCenter items-start gap-10 py-16">
        <div className="w-full md:w-1/2">
          <GoogleForm />
        </div>

        <div className="w-full md:w-1/2">
          <GoogleMap />
        </div>
      </div>
      */}

    </div>
  );
}
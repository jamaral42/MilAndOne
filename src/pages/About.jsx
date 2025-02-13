import compromisso from "/about/compromisso.jpg";
import comida_caseira from "/about/comida_caseira.jpg";
import detalhes from "/about/detalhes.jpg";


export default function About() {

  return (
    <div className="py-10 md:pb-40 flex flex-col items-center ">

      <div className="max-padd-container flexCenter flex-col-reverse md:flex-row gap-10 md:gap-20 my-10 md:my-20">
        <div className="md:w-1/2 flexCenter">
          <img src={compromisso} alt="Platter" className="rounded-xl"/>
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-6">O Nosso Compromisso</h1>
          <p className="text-sm md:text-lg">Na Mil&1, acreditamos que a comida desempenha um papel vital em qualquer ocasião.</p>
          <br />
          <p className="text-sm md:text-lg">Focamo-nos em fornecer soluções de catering únicas e caseiras, adaptadas às necessidades dos nossos clientes.</p>
          <br />
          <p className="text-sm md:text-lg">Esforçamo-nos por superar as expectativas e deixar uma impressão duradoura com a nossa atenção aos detalhes, opções de comida saudável e compromisso com a excelência na culinária.</p>
        </div>
      </div>

      <div className="max-padd-container flexCenter flex-col md:flex-row gap-10 md:gap-20 my-10 md:my-20">
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-6">Comida Caseira, Feita à Medida</h1>
          <p className="text-sm md:text-lg">Na Mil&1, acreditamos que a comida é uma forma de arte.</p>
          <br />
          <p className="text-sm md:text-lg">Preparamos cada prato com carinho e dedicação, oferecendo uma culinária única e saudável que combina sabores tradicionais com um toque inovador.</p>
          <br />
        </div>
        <div className="md:w-1/2 flexCenter">
          <img src={comida_caseira} alt="Platter" className="rounded-xl"/>
        </div>
      </div>

      <div className="max-padd-container flexCenter flex-col-reverse md:flex-row gap-10 md:gap-20 my-10 md:my-20">
        <div className="md:w-1/2 flexCenter">
          <img src="/about/detalhes.jpg" alt="Platter" className="rounded-xl"/>
        </div>        
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-6">O Nosso Compromisso</h1>
          <p className="text-sm md:text-lg">Estamos atentos aos detalhes para garantir que  cada  evento é verdadeiramente especial.</p>
          <br />
          <p className="text-sm md:text-lg">Destacamo-nos pela criatividade e dedicação, proporcionando experiências gastronómicas memoráveis, onde o sabor, a apresentação e o detalhe são a nossa prioridade.</p>
        </div>

      </div>

    </div>
  )
}
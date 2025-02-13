
export default function WhyUS() {
  return (
    <div className="py-20 flex flex-col items-center">
      <h1 className=" text-4xl font-bold">Porquê a Mil&1?</h1>
      <div className="max-padd-container flexCenter md:flexBetween gap-20 my-16 md:my-32">
        <div className="w-1/2">
          <p className="text-sm md:text-lg">Comida caseira.</p>
          <br />
          <p className="text-sm md:text-lg">Menús personalizados.</p>
          <br />
          <p className="text-sm md:text-lg">Serviço de staff, material e decoração.</p>
          <br />
          <p className="text-sm md:text-lg">Equipa jovem e dinâmica.</p>
        </div>
        <div className="w-1/2 flexCenter">
          <img src="/about_us.jpg" alt="Platter" className="rounded-xl w-[400px]"/>
        </div>
      </div>
    </div>
  );
}

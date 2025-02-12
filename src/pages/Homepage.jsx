
import Hero from "../components/Hero";
import Services from "../components/Services";
import Clients from "../components/Clients";
import WhyUS from "../components/WhyUS";


export default function Homepage() {

  return (
    <div className="relative">
      <Hero />
      <Services />
      <Clients />
      <WhyUS />

    </div>
);
}
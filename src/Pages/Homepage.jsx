
import Hero from "../components/Hero.jsx";
import Services from "../components/Services.jsx";
import Clients from "../components/Clients.jsx";
import WhyUS from "../components/WhyUS.jsx";


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
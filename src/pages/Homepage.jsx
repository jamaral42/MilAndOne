
import Hero2 from "../components/Hero2";
import Services from "../components/Services";
import Clients from "../components/Clients";
import WhyUS from "../components/WhyUS";


export default function Homepage() {

  return (
    <div className="relative">
      <Hero2 />
      <Services />
      <Clients />
      <WhyUS />

    </div>
);
}
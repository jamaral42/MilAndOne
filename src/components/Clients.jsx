import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect } from "react";
import useMeasure from "react-use-measure";

export default function Clients() {
  const companies = [
    "/logos/companhia_solucoes.png",
    "/logos/men_talks.png",
    "/logos/gnosis_chain.png",
    "/logos/egeac.png",
    "/logos/house_hope_dreams.png",
    "/logos/nmbrs.png",    
  ];

  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    if (!width) return;

    const finalPosition = -width / 2 - 110 ; // Moves half the logos width

    const controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 40, // Faster loop
      repeat: Infinity,
      repeatType: "loop",
    });

    return () => controls.stop();
  }, [xTranslation, width]);

  return (
    <div className="py-20 overflow-hidden relative text-center">
      <h2 className="text-4xl font-bold mb-14 md:mb-16">Alguns dos Nossos Clientes</h2>
      <motion.div 
        ref={ref}
        className="flex gap-55 w-max"
        style={{ x: xTranslation }}  
      >
        {[...companies, ...companies].map((company, index) => (
          <img src={company} alt={company} key={index} className="w-[100px]" />
        ))}
      </motion.div>
    </div>
  );
}

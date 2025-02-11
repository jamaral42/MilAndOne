import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect } from "react";
import useMeasure from "react-use-measure";
import { ChevronDown } from "lucide-react"; // Using Lucide icons


export default function HeroGallery() {

  const images = [
    "/feed/img1.jpg",
    "/feed/img2.jpg",
    "/feed/img3.jpg",
    "/feed/img4.jpg",
    "/feed/img5.jpg",
    "/feed/img6.jpg",
    "/feed/img7.jpg",
    "/feed/img8.jpg",
    "/feed/img9.jpg",
    "/feed/img10.jpg",
    "/feed/img11.jpg",
    "/feed/img12.jpg",
    "/feed/img13.jpg",
    "/feed/img14.jpg",
    "/feed/img15.jpg",
    "/feed/img16.jpg",
    "/feed/img17.jpg",
    "/feed/img18.jpg",
    "/feed/img19.jpg",
    "/feed/img20.jpg",
    "/feed/img21.jpg",
    "/feed/img22.jpg",
    "/feed/img23.jpg",
    "/feed/img24.jpg",
  ];

  let [ref, { height }] = useMeasure();
  const yTranslation = useMotionValue(0);

  useEffect(() => {
    if (!height) return;

    const finalPosition = -height / 2 + 8 ; // Moves half the logos height

    const controls = animate(yTranslation, [545, finalPosition+545], {
      ease: "linear",
      duration: 60, // Faster loop
      repeat: Infinity,
      repeatType: "loop",
    });

    return () => controls.stop();
  }, [yTranslation, height]);



  return (
    <div className="relative w-full h-[calc(100vh-96px)] overflow-hidden bg-primary flex items-center">
      <motion.div
        ref={ref}
        className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4 p-4"
        style={{ y: yTranslation }}  
      >
        {[...images, ...images ].map((src, index) => (
          <motion.div
            key={index}
            className="relative w-full h-35 md:h-60 rounded-xl overflow-hidden border-2 border-secondary"
            whileHover={{ scale: 1.075 }}
            transition={{ duration: 0.4 }}
          >
            <motion.img
              src={src}
              alt="Gallery Item"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Hovering Arrow */}
      <motion.div
        className="absolute bottom-6 md:bottom-25 left-1/2 transform -translate-x-1/2 text-secondary bg-primary rounded-full p-3 opacity-80 hover:opacity-100 shadow-md cursor-pointer "
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.2 }}
        whileTap={{ scale: 0.8 }}
        onClick={() => window.scrollTo({ top: window.innerHeight - 80, behavior: 'smooth' }) }
      >
        <ChevronDown className="size-12 md:size-14" />
      </motion.div>

    </div>
  );
}


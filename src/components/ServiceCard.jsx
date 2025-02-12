import { motion } from "framer-motion";
import { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Import the magnifier icon

export default function ServiceCard({ service }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  return (
    <div className="flex items-center justify-center bg-white h-[400px] cursor-default">
      <div className="flip-card w-[600px] h-[360px] rounded-md relative">
        <motion.div
          className="flip-card-inner w-[100%] h-[100%] hover:shadow-xl transition-shadow duration-300"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 0 } }
          transition={{ duration: 0.5 }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <div
            className="flip-card-front w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4 flex flex-col justify-center items-center"
            style={{ backgroundImage: `url(${service.image})` }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-2xl font-bold">{service.title}</h1>
              <p className="mt-2">{service.shortDesc}</p>
            </motion.div>
          </div>

          <div
            className="flip-card-back w-[100%] h-[100%] bg-white border-[1px] text-black rounded-lg p-4 flex flex-col justify-center items-center" // Center back content too
          >
            <h1 className="text-2xl font-bold">{service.title}</h1>
            <p>{service.longDesc}</p>
          </div>
        </motion.div>

        <motion.button
          className="absolute bottom-4 right-4 bg-white rounded-full p-2 hover:scale-110 transition-transform duration-300 shadow-md hover:shadow-lg"
          onClick={handleFlip}
        >
          <FaSearch className="h-6 w-6 text-gray-800" /> {/* Use React Icon */}
        </motion.button>
      </div>
    </div>
  );
}
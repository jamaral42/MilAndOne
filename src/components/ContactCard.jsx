import { motion } from "framer-motion";


export default function ContactCard({ name, surname, img, phone }) {

  return (
    <div className="flex justify-center">
      <motion.a
        href={`tel:${phone}`}
        className="flex flex-col items-center h-63 md:h-80 text-black rounded-xl bg-secondary border-4 border-primary shadow-xl"
        whileHover={{ 
          scale: 1.05, 
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)" 
        }}
        transition={{ duration: 0.2 }}
      >
        <img src={img} alt={name} className=" rounded-t-lg h-2/3 mb-2 md:mb-3"/>
        <div className="flex flex-col items-center h-1/3 text_md  md:text-lg font-semibold">
          <p>{name}</p>
          <p>{surname}</p>
          <p className="text-xs md:text-sm mt-1 md:mt-2">{phone}</p>
        </div>
      </motion.a>
    </div>
  )
}
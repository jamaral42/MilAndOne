import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "Catering", href: "/catering" },
  { name: "Sobre", href: "/about" },
  { name: "Contatos", href: "/contacts" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 shadow-2xl border-b ">

      {/* Desktop */}
      <div  className="hidden sm:block w-full">
        {/* Logo & Title */}
        <div className=" w-full bg-primary text-white shadow-2xl">
          <a href="/" className="max-padd-container flexCenter gap-6">
            <img src="/logo.png" alt="Logo" className="w-18 md:w-16 rounded-full m-4"/>
            <h1 className="text-lg xl:text-2xl font-bold">Mil&1 | Food for Events</h1> 
            {/*<h1 className="text-lg xl:text-2xl font-bold">Mil&1 </h1> 
            <img src="/logo.png" alt="Logo" className="w-18 md:w-16 rounded-full m-4" />
            <h1 className="text-lg xl:text-2xl font-bold"> Food for Events</h1> */}
          </a>
        </div>
        {/* Nav Links */}
        <div className="w-full flexCenter bg-secondary p-1">
          <nav className="hidden sm:flex text-md font-normal">
            {links.map((link) => (
              <a key={link.name} href={link.href} className="px-10 rounded-full hover:bg-secondary_highlight hover:underline ">
                  <p className="">{link.name}</p>
              </a>
            ))}
          </nav>
        </div>
      </div>
      
      
      {/* Mobile */}
      <div  className="sm:hidden w-full border-b-2  border-secondary">
        {/* Logo & Title */}
        <div className="w-full bg-primary text-white shadow-2xl p-4 flex justify-between items-center">
        <a href="/" className="flex items-center gap-4">
          <img src="/logo.png" alt="Logo" className="w-16 rounded-full p-1" />
          <h1 className="text-lg xl:text-2xl font-bold">Mil&1 | Food for Events</h1>
        </a>

        {/* Toggle Button */}
        <button className="p-2 text-secondary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      </div>

      {/* Animated Dropdown Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-[97px] left-0 w-full h-[calc(100vh-70px)] bg-primary flex flex-col justify-center items-center gap-14 z-10 shadow-md"
          >
            {links.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-secondary text-2xl font-bold transition-all duration-300 hover:scale-110"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>


    </header>
  );
}

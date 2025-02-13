import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ContactForm from "./ContactForm";

const links = [
  { name: "Home", href: "/" },
  { name: "Catering", href: "/catering" },
  { name: "Sobre", href: "/about" },
  { name: "Contatos", href: "/contacts" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 shadow-2xl py-2 bg-primary border-b border-secondary">

      {/* Desktop */}
      <div className="hidden sm:flex justify-between items-center text-white max-padd-container">
        {/* Logo & Title */}
        <a href="/" className="flex items-center gap-6">
          <img src="/logo.png" alt="Logo" className="w-18 md:w-16 rounded-full" />
          <h1 className="text-lg xl:text-2xl font-bold">Mil&1 | Food for Events</h1>
        </a>

        {/* Navigation & Contact */}
        <div className="flex items-center gap-8">
          <nav className="flex text-md font-normal">
            {links.map((link) => (
              <a key={link.name} href={link.href} className="px-6 rounded-full hover:bg-secondary_highlight hover:underline">
                {link.name}
              </a>
            ))}
          </nav>
          <button
            className="p-3 py-2 text-md bg-secondary shadow-xl text-primary rounded-full font-bold hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer"
            onClick={() => setIsContactOpen(true)}
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Mobile */}
      <div className="sm:hidden w-full">
        {/* Logo & Title */}
        <div className="w-full text-white p-4 flex justify-between items-center">
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
            className="fixed top-[97px] left-0 w-full h-[calc(100vh-70px)] bg-primary flex flex-col justify-center items-center gap-12 z-10 shadow-md"
          >
            {links.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-secondary text-2xl font-bold transition-all duration-300 hover:scale-110"
              >
                {link.name}
              </motion.a>
            ))}
            {/* Contact Us Button */}
            <button
            className="p-4 py-2 text-xl bg-secondary shadow-xl text-primary rounded-full font-bold"
            onClick={() => setIsContactOpen(true)}
            >
              Contact Us
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Form Panel */}
      <ContactForm isContactOpen={isContactOpen} setIsContactOpen={setIsContactOpen} />


    </header>
  );
}

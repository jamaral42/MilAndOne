import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-primary text-white pt-6 pb-3">
      {/* Contact Info */}
      <div className="max-padd-container flexCenter flex-col  gap-4 text-center ">
        <p className="mb-2 text-lg md:text-2xl font-semibold">
          Entre em contacto connosco, prometemos encontrar a melhor solução para o seu evento!
        </p>
        <div className="flexCenter flex-col md:flex-row mb-6 text-sm md:text-lg gap-4 md:gap-8">
          <a href="mailto:miland1food@gmail.com" className="hover:underline">miland1food@gmail.com</a>
          <div className="flex gap-6">
            <a href="tel:+351913240618" className="hover:underline"> (+351) 913 240 618</a> |
            <a href="tel:+351915778709" className="hover:underline"> (+351) 915 778 709</a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-padd-container flex flex-col-reverse md:flex-row items-center justify-between md:pt-4 px-6 gap-4 border-t border-secondary">
        {/* Company Info */}
        <div className="text-center md:text-left">
          <p className="text-sm">&copy; {new Date().getFullYear()} Mil&1 Food for Events - Direitos reservados.</p>
          <p className="text-sm opacity-80">Mérito Aromático, Lda.</p>
        </div>

        {/* Social Icons */}
        <a
          href="https://www.instagram.com/_mil.e1/" target="_blank" rel="noopener noreferrer" 
          className="mt-4 md:mt-0 flex gap-4 hover:text-gray-300"
        >
          <FaInstagram size={24} /> 
          Instagram
        </a>
      </div>
    </footer>
  );
}

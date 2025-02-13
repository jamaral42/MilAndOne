import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle } from "lucide-react";

export default function ContactForm({ isContactOpen, setIsContactOpen }) {
  const [formData, setFormData] = useState({
    email: "",
    nome: "",
    contacto: "",
    detalhes: "",
  });

  const [errors, setErrors] = useState({
    email: false,
    nome: false,
    detalhes: false,
  });

  const [successMessage, setSuccessMessage] = useState(false);

  useEffect(() => {
    if (isContactOpen) {
      setErrors({ email: false, nome: false, detalhes: false });
    }
  }, [isContactOpen]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      email: !formData.email.trim(),
      nome: !formData.nome.trim(),
      detalhes: !formData.detalhes.trim(),
    };

    setErrors(newErrors);

    if (!newErrors.email && !newErrors.nome && !newErrors.detalhes) {
      setSuccessMessage(true);
      setFormData({ email: "", nome: "", contacto: "", detalhes: "" });

      setTimeout(() => setSuccessMessage(false), 3000);
    }
  };

  return (
    <AnimatePresence>
      {isContactOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed top-0 right-0 w-full h-full bg-white shadow-lg p-6 z-20 flex flex-col
            sm:w-[400px] sm:h-[650px]
            md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-2xl"
        >
          {/* Close Button */}
          <button
            className="self-end text-gray-600 hover:text-black transition-all duration-300"
            onClick={() => setIsContactOpen(false)}
          >
            <X size={32} />
          </button>

          {/* Form */}
          <h2 className="text-2xl font-bold text-center my-8">Contacte-nos</h2>
          <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
            {["email", "nome"].map((field, index) => (
              <div key={index} className="relative">
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  value={formData[field]}
                  onChange={handleChange}
                  className={`p-2 border rounded-lg w-full ${errors[field] ? "border-red-500" : ""}`}
                />
                <div className="absolute left-0 bottom-[-18px] text-red-500 text-sm h-[18px]">
                  {errors[field] && "Este campo é obrigatório."}
                </div>
              </div>
            ))}

            <input
              type="text"
              name="contacto"
              placeholder="Contacto Telefónico"
              value={formData.contacto}
              onChange={handleChange}
              className="p-2 border rounded-lg"
            />

            <div className="relative">
              <textarea
                name="detalhes"
                placeholder="Detalhes do Evento/Questões"
                rows="6"
                value={formData.detalhes}
                onChange={handleChange}
                className={`p-2 border rounded-lg w-full ${errors.detalhes ? "border-red-500" : ""}`}
              />
              <div className="absolute left-0 bottom-[-18px] text-red-500 text-sm h-[18px]">
                {errors.detalhes && "Este campo é obrigatório."}
              </div>
            </div>

            <button
              type="submit"
              className="px-4 py-3 bg-primary text-white rounded-lg hover:bg-opacity-80 transition-all duration-300"
            >
              Enviar Mensagem
            </button>
          </form>

          {/* Success Message */}
          <AnimatePresence>
            {successMessage && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className="mt-4 flex items-center gap-2 p-3 bg-green-100 text-green-700 rounded-lg text-sm"
              >
                <CheckCircle size={20} />
                Mensagem enviada com sucesso!
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

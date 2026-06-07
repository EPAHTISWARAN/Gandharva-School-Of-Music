import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappNumber = "919876543210"; // Replace with actual WhatsApp number

  const message =
    "Hello Gandharva School, I would like to know more about your courses.";

  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        message
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg"
      animate={{
        scale: [1, 1.08, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.15,
      }}
      whileTap={{
        scale: 0.95,
      }}
    >
      <MessageCircle size={28} />
    </motion.a>
  );
}
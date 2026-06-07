import { motion } from "framer-motion";
import heroImage from "../../assets/images/home/hero-image.png";
import Container from "../../components/shared/Container";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center py-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="font-heading text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Learn Music, Dance & Instruments
            </motion.h1>

            <motion.p
              className="mt-6 max-w-2xl text-lg text-gray-600 md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Transform your passion into performance with expert guidance,
              structured learning, and certification programs designed for
              students of all ages.
            </motion.p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <button className="rounded-xl bg-[var(--primary)] px-6 py-3 text-white transition-all duration-300 hover:opacity-90">
                  Explore Courses
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <button className="rounded-xl border border-[var(--primary)] px-6 py-3 text-[var(--primary)] transition-all duration-300 hover:bg-[var(--primary)] hover:text-white">
                  Enquire Now
                </button>
              </motion.div>
            </div>

            {/* Trust Indicators */}
            <motion.div
              className="mt-10 flex flex-col gap-3 text-sm text-gray-600 md:flex-row md:flex-wrap md:gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <span>✓ Online & Offline Classes</span>
              <span>✓ Experienced Faculty</span>
              <span>✓ Certification Programs</span>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.img
            src={heroImage}
            alt="Music Academy"
            className="w-full rounded-3xl shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -10, 0],
            }}
            transition={{
              duration: 1,
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />
        </div>
      </Container>
    </section>
  );
}
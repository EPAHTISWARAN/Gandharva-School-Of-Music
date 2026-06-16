import { motion } from "framer-motion";
import heroVideo from "../../assets/images/home/hero-video.webm";
import Container from "../../components/shared/Container";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-white"
          >
            <h1 className="font-heading text-5xl font-bold md:text-6xl">
              Learn Music, Dance & Instruments
            </h1>

            <p className="mt-6 text-xl text-gray-200">
              Transform your passion into performance with expert guidance,
              structured learning, and certification programs designed for
              students of all ages.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="rounded-xl bg-[var(--primary)] px-6 py-3 text-white">
                Explore Courses
              </button>

              <button className="rounded-xl border border-white px-6 py-3 text-white">
                Enquire Now
              </button>
            </div>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
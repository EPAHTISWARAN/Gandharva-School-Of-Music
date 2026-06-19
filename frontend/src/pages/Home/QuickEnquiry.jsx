import { useState } from "react";
import Container from "../../components/shared/Container";
import SectionHeading from "../../components/shared/SectionHeading";

export default function QuickEnquiry() {
  const [course, setCourse] = useState("");

  return (
    <section
      id="enquiry-section"
      className="py-24 scroll-mt-32"
    >
      <Container>
        <div className="overflow-hidden rounded-3xl bg-white/90 shadow-2xl backdrop-blur-sm">
          <div className="grid lg:grid-cols-2">

            {/* Left CTA */}
            <div className="bg-[var(--primary)] p-10 text-white">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider">
                Get Started
              </p>

              <h2 className="font-heading text-4xl font-bold">
                Begin Your Musical Journey Today
              </h2>

              <p className="mt-6 text-white/80">
                Learn Vocal Music, Instruments and Dance from experienced
                faculty through structured training programs.
              </p>

              <div className="mt-8 space-y-3">
                <p>✓ Online & Offline Classes</p>
                <p>✓ Expert Faculty</p>
                <p>✓ Certification Programs</p>
                <p>✓ Free Demo Session Available</p>
              </div>
            </div>

            {/* Right Form */}
            <div className="p-10">
              <SectionHeading
                subtitle="Enquiry"
                title="Book A Free Demo"
                description="Fill out the form and our team will contact you."
              />

              <form className="mt-8 grid gap-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="rounded-xl border p-4"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="rounded-xl border p-4"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="rounded-xl border p-4"
                />

                {/* Main Course */}
                <select
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  className="rounded-xl border p-4"
                >
                  <option value="">Select Course</option>
                  <option value="singing">Singing</option>
                  <option value="instrumental">Instrumental Music</option>
                  <option value="dance">Dance</option>
                </select>

                {/* Singing Sub Courses */}
                {course === "singing" && (
                  <select className="rounded-xl border p-4">
                    <option>Select Singing Course</option>
                    <option>Hindustani Classical Vocal</option>
                    <option>Light Music</option>
                    <option>Bhajan & Devotional</option>
                    <option>Bollywood Singing</option>
                  </select>
                )}

                {/* Instrumental Sub Courses */}
                {course === "instrumental" && (
                  <select className="rounded-xl border p-4">
                    <option>Select Instrument</option>
                    <option>Acoustic Guitar</option>
                    <option>Electric Guitar</option>
                    <option>Keyboard</option>
                    <option>Harmonium</option>
                    <option>Tabla</option>
                    <option>Flute</option>
                    <option>Mrudungam</option>
                    <option>Violin</option>
                  </select>
                )}

                {/* Dance Sub Courses */}
                {course === "dance" && (
                  <select className="rounded-xl border p-4">
                    <option>Select Dance Form</option>
                    <option>Kathak</option>
                    <option>Bharatanatyam</option>
                    <option>Bollywood Dance</option>
                  </select>
                )}

                <button
                  type="submit"
                  className="rounded-xl bg-[var(--primary)] px-6 py-4 text-white transition hover:opacity-90"
                >
                  Submit Enquiry
                </button>
              </form>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
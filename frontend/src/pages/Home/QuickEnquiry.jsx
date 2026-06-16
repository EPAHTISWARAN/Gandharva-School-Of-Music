import Container from "../../components/shared/Container";
import SectionHeading from "../../components/shared/SectionHeading";

export default function QuickEnquiry() {
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

                <select className="rounded-xl border p-4">
                  <option>Select Course</option>
                  <option>Singing</option>
                  <option>Instrumental</option>
                  <option>Dance</option>
                </select>

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
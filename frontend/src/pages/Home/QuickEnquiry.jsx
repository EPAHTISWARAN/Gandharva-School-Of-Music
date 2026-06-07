import Container from "../../components/shared/Container";
import SectionHeading from "../../components/shared/SectionHeading";

export default function QuickEnquiry() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <SectionHeading
          subtitle="Get Started"
          title="Ready To Begin Your Musical Journey?"
          description="Fill out the form below and our team will get in touch with you."
        />

        <div className="mx-auto mt-12 max-w-3xl rounded-3xl bg-white p-8 shadow-lg">
          <form className="grid gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="rounded-xl border p-4 outline-none focus:ring-2"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="rounded-xl border p-4 outline-none focus:ring-2"
            />

            <select className="rounded-xl border p-4 outline-none focus:ring-2">
              <option>Select Course</option>
              <option>Singing</option>
              <option>Instrumental</option>
              <option>Dance</option>
            </select>

            <button
              type="submit"
              className="rounded-xl bg-[var(--primary)] px-6 py-4 text-white transition-all duration-300 hover:opacity-90"
            >
              Submit Enquiry
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
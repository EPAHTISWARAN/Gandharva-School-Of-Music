import Container from "../../components/shared/Container";
import SectionHeading from "../../components/shared/SectionHeading";

export default function CourseDetails() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <SectionHeading
          subtitle="Learning Process"
          title="How We Help You Grow"
          description="A structured learning approach focused on practical skills and performance."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl bg-white p-6 shadow-md">
            <h3 className="font-semibold">Foundation</h3>
            <p className="mt-3 text-gray-600">
              Learn fundamentals and build strong basics.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-md">
            <h3 className="font-semibold">Practice</h3>
            <p className="mt-3 text-gray-600">
              Guided sessions and regular assignments.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-md">
            <h3 className="font-semibold">Performance</h3>
            <p className="mt-3 text-gray-600">
              Participate in events and showcases.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-md">
            <h3 className="font-semibold">Certification</h3>
            <p className="mt-3 text-gray-600">
              Earn certificates and track progress.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
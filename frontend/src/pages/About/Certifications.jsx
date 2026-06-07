import Container from "../../components/shared/Container";
import SectionHeading from "../../components/shared/SectionHeading";

export default function Certifications() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <SectionHeading
          subtitle="Certifications"
          title="Recognized Learning Programs"
        />

        <div className="mx-auto mt-12 max-w-4xl rounded-2xl bg-white p-8 shadow-md">
          <p className="text-center text-gray-600">
            Students can prepare for recognized music examinations,
            certifications and performance assessments through
            structured training programs.
          </p>
        </div>
      </Container>
    </section>
  );
}
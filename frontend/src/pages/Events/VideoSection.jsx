import Container from "../../components/shared/Container";
import SectionHeading from "../../components/shared/SectionHeading";

export default function VideoSection() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <SectionHeading
          subtitle="Performances"
          title="Watch Our Students In Action"
          description="A glimpse into our concerts, recitals and performances."
        />

        <div className="mt-12 overflow-hidden rounded-3xl shadow-lg">
          <div className="flex aspect-video items-center justify-center bg-gray-200">
            <p className="text-gray-600">
              Video Placeholder
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
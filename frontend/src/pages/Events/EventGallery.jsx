import Container from "../../components/shared/Container";
import SectionHeading from "../../components/shared/SectionHeading";
import EventCard from "./EventCard";

export default function EventGallery() {
  const events = [
    {
      title: "Annual Music Concert",
      description:
        "A showcase of student performances and musical excellence.",
    },
    {
      title: "Instrument Showcase",
      description:
        "Live performances featuring multiple instruments.",
    },
    {
      title: "Dance Festival",
      description:
        "A celebration of movement, rhythm and creativity.",
    },
  ];

  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          subtitle="Events"
          title="Our Performances & Programs"
          description="Explore workshops, concerts, festivals and student showcases."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard
              key={event.title}
              title={event.title}
              description={event.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
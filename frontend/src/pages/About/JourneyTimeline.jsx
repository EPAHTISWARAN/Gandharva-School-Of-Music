import Container from "../../components/shared/Container";
import SectionHeading from "../../components/shared/SectionHeading";

export default function JourneyTimeline() {
  const milestones = [
    {
      year: "2000",
      title: "Academy Founded",
    },
    {
      year: "2010",
      title: "Expanded Programs",
    },
    {
      year: "2020",
      title: "Online Classes Started",
    },
    {
      year: "2025",
      title: "Thousands of Students Trained",
    },
  ];

  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          subtitle="Our Journey"
          title="Building Musical Excellence"
        />

        <div className="mt-12 space-y-8">
          {milestones.map((item) => (
            <div
              key={item.year}
              className="rounded-2xl bg-white p-6 shadow-md"
            >
              <div className="text-xl font-bold text-[var(--primary)]">
                {item.year}
              </div>

              <p className="mt-2">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
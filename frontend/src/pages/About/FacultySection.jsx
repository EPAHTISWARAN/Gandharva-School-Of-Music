import Container from "../../components/shared/Container";
import SectionHeading from "../../components/shared/SectionHeading";

export default function FacultySection() {
  const faculty = [
    {
      name: "Faculty Member",
      role: "Vocal Music",
    },
    {
      name: "Faculty Member",
      role: "Instrumental Music",
    },
    {
      name: "Faculty Member",
      role: "Dance Instructor",
    },
  ];

  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <SectionHeading
          subtitle="Faculty"
          title="Learn From Experienced Mentors"
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {faculty.map((teacher) => (
            <div
              key={teacher.role}
              className="rounded-2xl bg-white p-6 shadow-md"
            >
              <div className="mb-4 text-5xl">👨‍🏫</div>

              <h3 className="text-xl font-semibold">
                {teacher.name}
              </h3>

              <p className="mt-2 text-gray-600">
                {teacher.role}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
import JourneyTimeline from "./JourneyTimeline";
import FacultySection from "./FacultySection";
import Achievements from "./Achievements";
import Certifications from "./Certifications";

export default function About() {
  return (
    <>
    <PageBanner
        title="About Us"
        subtitle="Our journey, faculty and achievements."
    />
      <JourneyTimeline />
      <FacultySection />
      <Achievements />
      <Certifications />
    </>
  );
}
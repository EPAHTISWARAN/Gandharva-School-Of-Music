import PageBanner from "../../components/shared/PageBanner";
import JourneyTimeline from "./JourneyTimeline";
import FacultySection from "./FacultySection";
import Achievements from "./Achievements";
import Certifications from "./Certifications";

export default function About() {
return (
<> <PageBanner
     title="About Us"
     subtitle="Discover our journey, our passion for music and dance, and the people who inspire excellence every day."
   />


 
  {/* Academy Journey */}
  <JourneyTimeline />

  

  {/* Faculty Section */}
  <FacultySection />

 

  {/* Achievements */}
  <Achievements />

  {/* Certifications */}
  <Certifications />





  
</>


);
}
